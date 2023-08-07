import React from "react";
import { Container, Image } from "react-bootstrap";
import sunsetImg from './sunset-beach.jpg';

export default function BlogPage() {
    return (
        <Container className="d-flex flex-column justify-content-left">
            <Image src={sunsetImg} fluid className="mt-5 mb-4 img-responsive" />
            <h2>The Goan Experience - what it was like being born and brought up in Goa</h2>
            <h6><b>by Jonathan Mascarenhas</b></h6>
            <h6>Aug 7, 2023</h6>

            {/* Luke - write an algo to insert line break after x number of characters */}
            <p className="mt-4 mb-3">There was a time when this wouldn't have bothered her.
                The fact that it did actually bother her bothered her even more.
                What had changed in her life that such a small thing could annoy her so much for the entire day?<br /><br />
                She knew it was ridiculous that she even took notice of it, yet she was still obsessing over it as she tried to fall asleep.
                Sleeping in his car was never the plan but sometimes things don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the key into the ignition, turned it and the engine didn't make a sound.<br /><br />
                Twenty-five hours had passed since the incident. It seemed to be a lot longer than that. That twenty-five hours seemed more like a week in her mind. The fact that she still was having trouble comprehending exactly what took place wasn't helping the matter. She thought if she could just get a little rest the entire incident might make a little more sense.<br /><br />
                It was a simple tip of the hat. Grace didn't think that anyone else besides her had even noticed it. It wasn't anything that the average person would notice, let alone remember at the end of the day. That's why it seemed so unbelievable that this little gesture would ultimately change the course of the world.
                Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon.
            </p>

        </Container>
    )
}