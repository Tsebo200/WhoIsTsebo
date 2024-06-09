import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Example = () => {
    const images = [
        "https://media.discordapp.net/attachments/1051908014111740036/1249466083296149675/arcade.png?ex=66676778&is=666615f8&hm=dabb85661d26621fbe83da6d407166ee8573a3de23b8443961bdee732ee8bbad&=&format=webp&quality=lossless&width=786&height=1138",
        "https://images.unsplash.com/photo-1717457779749-7a6707d042ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]}` }}>
                    <span>
                    Slide 1
                    </span>
                </div>
            </div>
            {/* <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div> */}
        </Slide>
    );
};

export default Example;