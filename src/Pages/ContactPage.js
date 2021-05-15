import React from 'react';
import ContactItem from "../Components/ContactItem";
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import PageTitle from "../Components/PageTitle";

function ContactPage() {
    return (
        <>
            <div className="title">
                <PageTitle title={'Contact Me'} span={'Contact Me'}/>
            </div>
            <div className="ContactPage">
                <div className="mapSection">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106193.16219339923!2d-84.98657091886986!3d33.72094523322253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888b2cfb03d6df7b%3A0x86e06e5e1452acd7!2sVilla%20Rica%2C%20GA%2030180!5e0!3m2!1sen!2sus!4v1620889292549!5m2!1sen!2sus"
                        width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contactSection">
                    <ContactItem icon={phone} text={'770-881-4402'} title={'Phone'}/>
                    <ContactItem icon={email} text={'mpavich2@my.westga.edu'} title={'Email'}/>
                    <ContactItem icon={location} text={'Villa Rica, Georgia'} title={'Location'}/>
                </div>
            </div>
        </>
    )
}

export default ContactPage;