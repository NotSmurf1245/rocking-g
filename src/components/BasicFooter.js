import {React} from 'react'
import Sponsers from './Sponsers'
import OPGLogo from './assets/OPGLogo.jpg';
import ACGTLogo from './assets/ACGTLogo.jpg'

function BasicFooter() {
    return (
        <div className="footerContainer">
            <Sponsers title="Our Sponsers" image1={OPGLogo} alt1="On Par Golf Logo" image2={ACGTLogo} alt2="Alamo City Golf Trail Logo" />
            <div className="hoursElem">
                <h1 className="bodyTitle">Hours</h1>
                <table>
                    <tr><th>Sunday</th><td>Closed</td></tr>
                    <tr><th>Monday</th><td>9am - 5pm</td></tr>
                    <tr><th>Tuesday</th><td>9am - 5pm</td></tr>
                    <tr><th>Wednesday</th><td>9am - 5pm</td></tr>
                    <tr><th>Thursday</th><td>9am - 5pm</td></tr>
                </table>
            </div>
            <div className="contactElem">
                <h1 className="bodyTitle">Contact Us</h1>
                <table>
                    <tr><th>Address</th><td>1250 Mission Grande</td></tr>
                    <tr><th>Phone</th><td>(210) 499-9839</td></tr>
                    <tr><th>Email</th><td>info@onpargolf.net</td></tr>
                </table>
            </div>
        </div>
    )
}

export default BasicFooter

