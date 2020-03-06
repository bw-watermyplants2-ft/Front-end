import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const WelcomePage = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Water My Plants</h1>
        <p className="lead">Use our app to make a schedule for watering your plants.</p>
        <hr className="my-2" />
        <p>Click the register button to make an account and get started.</p>
        <p className="lead">
          <Button color="primary" href='/register/'>Register</Button>
        </p>
        <p>Already have an account? Login in Here:</p>
        <p>
            <Button color="primary" href="/login/">Login</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default WelcomePage;