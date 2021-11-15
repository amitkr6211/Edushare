import '../css/App.css';
import { Button } from './Button';
import '../css/HeroSection.css';

function HeroSection() {

    return (
        <div className='hero-container'>
            <h1>Learn Together</h1>
            <p>Welcome to EduShare!</p>
            <div className='hero-btns'>

                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path='/start'
                >
                    GET STARTED
                </Button>

            </div>
        </div>
    );
}
export default HeroSection;