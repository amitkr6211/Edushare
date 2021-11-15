import {Button} from "./Button";
import '../css/Interface.css'
const Interface = () => {
  return(
      <div className='i-container'>
          <h3>Welcome to EduShare!</h3>
          <div className='i-btns'>

              <Button
                  className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  path='/create'
                  children='Create a Group'
              />
              <Button
                  className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  path='/view'
                  children='My Groups'
              />
          </div>
      </div>
  );
}
export default Interface;