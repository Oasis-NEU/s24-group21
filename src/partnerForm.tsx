import React, { useRef, useState, useEffect, FunctionComponent } from "react";
import './App.css';
import { supabase } from "./supabase";
import { Database, Tables, Enums } from "./supabase-types";
import { UserObj, SessionUserProps } from "./types";
import CompatabilityPage from "./CompatabilityPage";

const PartnerForm: FunctionComponent<SessionUserProps> = ({user}) => {

    const logOut = () => {
        supabase.auth.signOut();
    }

    const[subjects, setSubjects] = useState<Tables<"subjects">[]>([]);
    useEffect(() => {
        getSubjects();
        checkUserExistence();
    }, []);

    const [userExists, setUserExists] = useState<boolean>(false);

    async function getSubjects() {
        const { data } = await supabase.from("subjects").select("*");
        if(data != null) {setSubjects(data)};
    }

    async function checkUserExistence(){
        const { count } = await supabase.from('users').select('*', {count: 'exact'}).eq("user_id", user.id)
        setUserExists(count ? count > 0 : false);
    }

    const nameRef = React.useRef<HTMLInputElement>(null);
    const subjectRef = React.useRef<HTMLInputElement>(null);
    const groupAmountRef = React.useRef<HTMLInputElement>(null);
    const leaderFollowerRef = useRef(null);
    const divideTogetherRef = React.useRef<HTMLInputElement>(null);
    const virtualInpersonRef = React.useRef<HTMLInputElement>(null);
    const experienceRef = React.useRef<HTMLInputElement>(null);

    const saveForm = async () => {
        const subjectElement = document.getElementById("subject") as HTMLInputElement | null;
        const subId = subjectElement ? subjectElement.value : "";
        const newUser: Tables<"users"> = {user_id: user.id, name: nameRef.current?.value || "", email: user.email || "", 
            leader_follower: parseInt(getRadioVal(leaderFollowerRef, "leader_follower") ),
        divide_together: getRadioVal(divideTogetherRef, "divide_together"), 
        virtual_inPerson: getRadioVal(virtualInpersonRef, "virtual_inperson"), 
        experience: parseInt(getRadioVal(experienceRef, "experience")),
        subject_id: subId, group_id: null, rank: null};
        const res = await supabase
        .from("users")
        .insert(newUser)
        .select("*")
        .single();

        if(res.data) {
            console.log(res.data);
            alert("Thank you for your submission! You will now be taken to the partner compatability page.");
            setUserExists(true);
        } else { 
            console.log("error saving form input");
        }
    }

    const getRadioVal = (ref: React.RefObject<HTMLDivElement>, groupName: string): string => {
        const selectedInput = ref.current?.querySelector(`input[name="${groupName}"]:checked`) as HTMLInputElement;
        return selectedInput ? selectedInput.value : "";
    };

    function handleSubmit(e: any) {
        e.preventDefault();
        var form: any = document.getElementById('form'); 
        form.classList.add('was-validated');
        if (form.checkValidity() === false) {
            e.stopPropagation();
            return;
        }
        saveForm();
        form.reset();
        form.classList.remove('was-validated');
    }
    console.log(userExists);
    if(!userExists) {
        return (
            <div id="partnerForm">
                <button onClick={(e) => logOut(e)}>Logout</button>
                <div className="container">
                    <h1 className="sub-title">Partner Form</h1>
                    <form id="form" onSubmit={handleSubmit}>
                        <input ref={nameRef} type="text" name="Name" placeholder="Your name" required />
                        <h2 className="formHeaders">First, pick the subject this project is for and how many people per group!</h2>
                        <div ref={subjectRef}>
                            <select id="subject" name="subject" required>
                            {subjects.map((subject: Tables<"subjects">) => (
                                <option key={subject.id} value={subject.id}>
                                {subject.name}
                            </option>
                            ))}
                            </select>
                        </div>
                        <input ref={groupAmountRef} type="number" name="GroupAmount" placeholder="Number of people per group" required />
                        <h2 className="formHeaders">Next, answer the following questions, and we'll find your best matches!</h2>
                        <h3>Rank yourself on a scale from leader (left) to follower (right):</h3>
                        <div className="flexOptions" ref={leaderFollowerRef}>
                            <input type="radio" value="-2" name="leader_follower" required/>
                            <input type="radio" value="-1" name="leader_follower"/>
                            <input type="radio" value="0" name="leader_follower"/>
                            <input type="radio" value="1" name="leader_follower"/>
                            <input type="radio" value="2" name="leader_follower"/>
                        </div>
                        <h3>Do you prefer to divide and conquer or work together simultaneously?</h3>
                        <div ref={divideTogetherRef} className="options">
                            <input type="radio" id="divide" value="Divide and conquer" name="divide_together"required/>
                            <label htmlFor="divide">Divide and conquer</label><br/>
                            <input type="radio" id="together" value="Work together" name="divide_together" />
                            <label htmlFor="together">Work together</label><br />
                        </div>
                        <h3>Do you prefer working virtually or in-person?</h3>
                        <div ref={virtualInpersonRef} className="options">
                            <input type="radio" id="virtually" value="Virtually" name="virtual_inperson"required/>
                            <label htmlFor="virtually">Virtually</label><br/>
                            <input type="radio" id="inperson" value="In person" name="virtual_inperson" />
                            <label htmlFor="inperson">In-person</label><br />
                        </div>
                        <h3>Rank your experience with this topic from no experience (left) to a lot (right):</h3>
                        <div ref={experienceRef} className="flexOptions">
                            <input type="radio" value="-2" name="experience" required/>
                            <input type="radio" value="-1" name="experience"/>
                            <input type="radio" value="0" name="experience"/>
                            <input type="radio" value="1" name="experience"/>
                            <input type="radio" value="2" name="experience"/>
                        </div>
                        <div>
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    } else {
        return (
            <div><CompatabilityPage user={user}/></div>
        );
    }
}

export default PartnerForm;