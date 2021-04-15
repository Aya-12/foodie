import React from 'react'
import './footer.css'

export default class Footer extends React.Component {
    render(){
        return (
            <footer>
                <div className="sociaux">
                    <img src="Facebook.svg" alt="facebook" />
                    <img src="./instagram.svg" alt="instagram" />
                    <img src="./twitter.svg" alt="twitter" />
                    <img src="logosnapchat.svg" alt="snapshat" />
                </div>
                <div className="meal-alphabet">
                    <ul>
                    <li><a href="">A</a></li>
                    <li><a href="">B</a></li>
                    <li><a href="">C</a></li>
                    <li><a href="">D</a></li>
                    <li><a href="">E</a></li>
                    <li><a href="">F</a></li>
                    <li><a href="">G</a></li>
                    <li><a href="">H</a></li>
                    <li><a href="">I</a></li>
                    <li><a href="">J</a></li>
                    <li><a href="">K</a></li>
                    <li><a href="">L</a></li>
                    <li><a href="">M</a></li>
                    <li><a href="">N</a></li>
                    <li><a href="">O</a></li>
                    <li><a href="">P</a></li>
                    <li><a href="">Q</a></li>
                    <li><a href="">R</a></li>
                    <li><a href="">S</a></li>
                    <li><a href="">T</a></li>
                    <li><a href="">U</a></li>
                    <li><a href="">V</a></li>
                    <li><a href="">W</a></li>
                    <li><a href="">X</a></li>
                    <li><a href="">Y</a></li>
                    <li><a href="">Z</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}