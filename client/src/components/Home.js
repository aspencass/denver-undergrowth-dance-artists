import React, { useState } from "react";
import Login from "./Login";
import { Button } from "flowbite-react";

export default function Home({ updateUser }) {
  const initialText = "Contact Us";
  const [buttonText, setButtonText] = useState(initialText);

  function onContactClick() {
    setButtonText("caroline.sharkey98@gmail.com");

    setTimeout(() => {
      setButtonText(initialText);
    }, 4000); // 👈️ change text back after 4 seconds
  }

  function onOpenLetterClick() {
    window.location.href =
      "https://docs.google.com/document/d/1gTXMmC0OOb88BQb362GTCy_EPut9FGfHAdm_WoClBug/edit?usp=sharing";
  }

  return (
    <>
      {/* login  */}
      {/* <div class="login">
          <Login updateUser={updateUser}/>
        </div> */}

      {/* green block  */}
      <div className="bg-[url('./assets/green.png')] bg-cover flex items-center">
        <div className="text-4xl text-white font-bold pr-52 pl-52 pt-10 pb-10 ">
          <p>
            {" "}
            UNDERGROWTH started with a series of town halls to gather the Denver
            Dance Community together. <br /> <br />
            We are currently expanding towards making UNDERGROWTH a place for
            Denver artists to connect via classes, festivals, professional
            development, resource sharing, and ongoing meetings.{" "}
          </p>
        </div>
      </div>

      {/* yellow block  */}
      <div className="bg-[#fffc52] bg-cover flex items-center">
        <div className="text-black pl-20 pr-20 pt-16 pb-16">
          <div className="text-4xl text-center font-extrabold leading-normal">
            <p>
              The front-range dance and performing arts community is at a
              critical point in its timeline. Dance artists are struggling for
              reasons to stay in the arts.
              <br />
            </p>
          </div>
          <div className="font-normal text-center text-xl leading-normal pt-6">
            <p>
              The undergrowth is the seedlings, fighters, and survivors: those
              who found nourishment out of the necessity of defying the
              conventional systems in order to survive. This process is for us
              and dedicated to us, the dance artists who are finding ways to
              continue on in the face of the unknown.
            </p>
          </div>

          <div className="pt-10 flex flex-col items-center">
            <Button
              onClick={onOpenLetterClick}
              class="bg-black text-[#fffc52] pr-6 pl-6 pt-4 pb-4 text-xl"
            >
              Read The Open Letter
            </Button>
          </div>
        </div>
      </div>

      {/* meeting section  */}

      <div className="bg-[url('./assets/nude.png')] bg-cover p-20">
        {/* identify */}
        <div className="grid-container2">
          <div className="grid-child3">
            <div className="text-8xl font-extrabold w-50">IDENTIFY</div>
            <div className="pt-6">
              An open forum discussion where Front Range dance artists will
              congregate to discuss and share their experiences and express
              opportunities for growth that exist within the local dance
              ecology. The goal of this meeting is to identify a set of needs
              categories named from the conversations held during the town hall.
            </div>
          </div>

          <div className="grid-child4">
            <div className="text-4xl text-center font-extrabold italic leading-relaxed pt-10">
              MAY 1, 2022
              <br />5 PM
              <br />
              THE SAVOY DENVER
            </div>
          </div>
        </div>
        {/* specify */}
        <div className="grid-container3">
          <div className="grid-child5">
            <div className="text-8xl font-extrabold w-50 pt-20">SPECIFY</div>
            <div className="pt-6">
              Another public town hall where participants will break off into
              small group discussions led by leaders in the dance community.
              Each small group discussion will address 1-3 of the needs
              categories identified in the first town hall. At the end of this
              event, each group will emerge with action items from and for the
              local dance community that address the needs categories assigned
              to the group.
            </div>
          </div>
          <div className="grid-child6">
            <div className="text-4xl text-center font-extrabold italic leading-relaxed pt-32">
              JUNE 13, 2022
              <br />5 PM
              <br />
              REDLINE ARTS
            </div>
          </div>
        </div>
        {/* take action */}
        <div className="grid-container4">
          <div className="grid-child7">
            <div className="text-8xl font-extrabold w-50 pt-20">TAKE ACTION</div>
            <div className="pt-6">
              An open forum discussion where Front Range dance artists will
              congregate to discuss and share their experiences and express
              opportunities for growth that exist within the local dance
              ecology. The goal of this meeting is to identify a set of needs
              categories named from the conversations held during the town hall.
            </div>
          </div>

          <div className="grid-child8">
            <div className="text-4xl text-center font-extrabold italic leading-relaxed pt-32">
              SEPTEMBER 23, 2022
              <br />
              5:30 PM
              <br />
              ZOOM
            </div>
          </div>
        </div>
      </div>
      {/* contact us  */}
      <div className="bg-[url('./assets/green.png')] bg-cover flex items-center justify-center">
        <div className="text-2xl text-white font-bold pr-10 pl-10 pt-20 pb-10 ">
          <p>
            {" "}
            Have thoughts, questions, or suggestions? Reach out! We are a
            continuous work in progress…
          </p>
          <div className="pt-10 flex flex-col items-center">
            <Button
              onClick={onContactClick}
              class="bg-[#fffc52] text-black pr-6 pl-6 pt-4 pb-4 text-xl"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
