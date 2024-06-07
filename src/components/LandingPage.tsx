import React, { useState } from 'react';


const LandingPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Monster Legends Idle RPG</h1>
      
    </div>
  );
};

export default LandingPage;
