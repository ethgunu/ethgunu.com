import React from "react"
import Seo from "../components/seo"

const CodeOfConduct = () => {
  return (
    <div className="bg-gunuPink pt-[5rem]">
      <div className="mx-12 py-8">
        <h1 className="text-3xl font-serif font-bold">Code of Conduct</h1>
        <div className="mt-4">
          <h2 className="mt-2 text-lg">
            <strong>TL;DR</strong>
          </h2>
          <p>
            <strong>Be excellent to each other</strong>. If a participant is, in
            our sole discretion, harassing or otherwise unacceptably impacting
            other participants&#39; ability to enjoy ETHGünü, we at all times
            reserve the right to remove the offending person(s) from the event
            without refund.
          </p>
          <h2 className="mt-2 text-lg">
            <strong>Don&#39;t Shill</strong>
          </h2>
          <p>
            ETHGünü is designed for builders and developers -{" "}
            <strong>
              <em>
                We aim to create a welcoming, collaborative space which allows
                for great networking opportunities. Please respect this space
                and the opportunity it affords by not aggressively shilling
                ICOs, investment opportunities, or financial products.
              </em>
            </strong>{" "}
            If unsure, please ask the staff.
          </p>
          <h2 className="mt-2 text-lg">
            <strong>Harassment Policy</strong>
          </h2>
          <p>
            We do not condone any form of harassment against any participant,
            for any reason.
          </p>
          <p>
            Harassment includes, but is not limited to, any threatening,
            abusive, or insulting words, behavior, or communication (whether in
            person or online), whether relating to gender, sexual orientation,
            physical or mental ability, age, socioeconomic status, ethnicity,
            physical appearance, race, religion, sexual images, or otherwise.
            Harassment also includes hacking, deliberate intimidation, stalking,
            inappropriate physical contact, and unwelcome sexual attention.
          </p>
          <p>
            Participants asked to stop any harassing behavior must comply
            immediately. We reserve the right to respond to harassment in the
            manner we deem appropriate, including but not limited to expulsion
            without refund and referral to the relevant authorities.
          </p>
          <p>
            This Code of Conduct applies to everyone participating at ETHGünü -
            from attendees and exhibitors to speakers, press, volunteers, etc.
          </p>
          <p>
            Anyone can report harassment. If you were or are being harassed,
            notice that someone else was or is being harassed, or have any other
            concerns related to harassment, you can contact a ETHGünü volunteer
            or staff member, make a report at the registration desk or info
            booth, or submit a complaint to info@ethgunu.com.
          </p>
          <h2 className="mt-2 text-lg">
            <strong>Approved Swag Only</strong>
          </h2>
          <p>
            <strong>
              Only pre-approved teams are authorized to distribute swag
              (clothing, sales, freebies, or any form of promotional material)
              at ETHGünü!
            </strong>{" "}
            Examples of permitted groups include the ETHGünü team, and some of
            the other pre-approved event organizers. Please respect this
            decision. If you are unsure of whether you are allowed to distribute
            your swag, ask the friendly staff!
          </p>
          <h2 className="mt-2 text-lg">
            <strong>Wifi Etiquette</strong>
          </h2>
          <p>
            We want all attendees to be able to enjoy fast, reliable WiFi. As
            such, please keep the following in mind:
          </p>
          <ul>
            <li>
              <em>No ARP storms</em>
            </li>
            <li>
              <em>No Private WiFi access points</em>
            </li>
            <li>
              <em>No Private DHCP servers</em>
            </li>
          </ul>
          <h2 className="mt-2 text-lg">
            <strong>Media Policy</strong>
          </h2>
          <p>
            By attending our event you agree to be photographed and/or filmed
            during the event. These photos and/or videos may be used for
            promotional purposes on our website and social media channels. If
            you do not wish these to be used in our public channels, please let
            us know.
          </p>
          <h3 className="mt-2">
            <strong>Be Respectful to Speakers (and audiences)</strong>
          </h3>
          <p>
            Be mindful of your volume when you&#39;re in or near event venues.
            Noise levels can quickly get out of control and become disruptive to
            the programme going on inside! Please respect the speakers and
            participants if you are arriving late to an event and/or getting up
            to leave an event early — try to cause as little disruption as
            possible.
          </p>
          <h3 className="mt-2">
            <strong>Local Laws</strong>
          </h3>
          <p>
            You must comply with all venue and facility rules and regulations
            during your participation in ETHGünü, including all safety
            instructions and requirements. It is also very important to note
            that <strong>ALL</strong> attendees are expected to conform to{" "}
            <strong>ALL</strong> local laws, including Covid-19 restrictions and
            policies imposed by the venue, facility, and/or local authorities.
          </p>
          <h3 className="mt-2">
            <strong>How to Report</strong>
          </h3>
          <p>
            If you notice any violations of this Code of Conduct please report
            them to info@ethgunu.com.
          </p>
          <h2 className="mt-2 text-lg">
            <strong>Remember</strong>
          </h2>
          <p>
            <strong>
              ETHGünü is what you make of it, and as a community we can create a
              safe, meaningful, and incredible experience for everyone! 🦄
            </strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CodeOfConduct

export const Head = () => {
  return (
    <>
      {/* <html className="scroll-smooth" lang="tr" /> */}
      <Seo title="Ethereum ile Tanışın" />
    </>
  )
}
