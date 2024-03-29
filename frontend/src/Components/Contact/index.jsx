import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constant";

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            subject: subject,
            message: message,
        };
        try {
            const response = await axios.post(BASE_URL+`contact/`, data, 
                { headers: { 'Content-Type': 'application/json'}}
            );
            if (response.status === 200) {
                alert("Message sent successfully.")
            } else {
                alert("Error");
            }
        }catch (error) {
            alert(error)
        } 
    }

    return (
        <div>
            <section className="pt-16">
                <div className="container mx-auto">
                    <div className="grid items-center grid-cols-12 mt-5 lg:gap-8 gap-y-8">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="mt-4">
                                <h3 className="mb-2 text-3xl text-gray-900 dark:text-white">Get in touch</h3>
                                <p className="text-gray-500 dark:text-gray-300">Start working with Jobcy that can provide everything you need to generate
                                    awareness, drive traffic, connect.</p>
                                <form className="mt-4 contact-form" onSubmit={submit}>
                                    <span id="error-msg"></span>
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="col-span-6">
                                            <div className="mb-3">
                                                <label htmlFor="nameInput" className="text-gray-900 dark:text-gray-50">First name</label>
                                                <input required type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" placeholder="Enter your first name" />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="mb-3">
                                                <label htmlFor="nameInput" className="text-gray-900 dark:text-gray-50">Last name</label>
                                                <input required type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" placeholder="Enter your last name" />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <div className="mb-3">
                                                <label htmlFor="emailInput" className="text-gray-900 dark:text-gray-50">Email</label>
                                                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <div className="mb-3">
                                                <label htmlFor="subjectInput" className="text-gray-900 dark:text-gray-50">Subject</label>
                                                <input required type="text" value={subject} onChange={e => setSubject(e.target.value)} className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" placeholder="Enter your subject" />
                                            </div>
                                        </div>
                                        <div className="col-span-12">
                                            <div className="mb-3">
                                                <label htmlFor="meassageInput" className="text-gray-900 dark:text-gray-50">Your Message</label>
                                                <textarea required value={message} onChange={e => setMessage(e.target.value)} className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" placeholder="Enter your message" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <button type="submit" id="submit" name="submit" className="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500"> Send Message <i className="uil uil-message ms-1"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 lg:ml-20">
                            <div className="text-center">
                                <img src="assets/images/contact.png" alt="" className="img-fluid" />
                            </div>
                            <div className="pt-3 mt-4">
                                <div className="flex items-center mt-2 text-gray-500">
                                    <div className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22">
                                        <i className="uil uil-map-marker"></i>
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2 grow-1">
                                        <p className="mb-0 dark:text-gray-300">2453 Clinton StreetLittle Rock, California, USA</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2 text-gray-500">
                                    <div className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22">
                                        <i className="uil uil-envelope"></i>
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2 grow-1">
                                        <p className="mb-0 dark:text-gray-300">contactus@Jobcy.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2 text-gray-500">
                                    <div className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22">
                                        <i className="uil uil-phone-alt"></i>
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2 grow-1">
                                        <p className="mb-0 dark:text-gray-300">(+245) 223 1245</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-20">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509157.364974411!2d-123.79641389801948!3d37.193115265681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1628684675253!5m2!1sen!2sin" height="350" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contact