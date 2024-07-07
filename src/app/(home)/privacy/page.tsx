import React from "react";

export default function Page() {
  return (
    <section className="bg-White">
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pb-16 pt-10 grid items-center">
        <p className="text-3xl mb-1">Privacy Policy</p>
        <div className="space-y-5">
          <p className="">
            {`CoinReach (the "Company") is committed to protecting the privacy of
            its remote workers, clients, and agents (collectively, "Users").
            This Privacy Policy explains how the Company collects, uses,
            discloses, and protects User information.`}
          </p>
          <div className="space-y-5 *:space-y-1">
            <div className="space-y-1">
              <p className="font-semibold">Information Collection</p>
              <p className="">
                The Company collects the following types of information:
              </p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>
                  Personal information (name, email, phone number, address)
                </li>
                <li>
                  Identification information (government-issued ID, passport)
                </li>
                <li>
                  Financial information (bank account details, payment
                  information)
                </li>
                <li>
                  Transaction information (transaction amounts, dates, currency
                  exchange rates)
                </li>
                <li>
                  Technical information (IP address, device information, browser
                  type)
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Information Use</p>
              <p className="">
                The Company uses User information for the following purposes:
              </p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>To provide services and complete transactions</li>
                <li>To verify identity and prevent fraud</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To communicate with Users</li>
                <li>To improve services and user experience</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Information Disclosure</p>
              <p className="">The Company may disclose User information to:</p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>Agents and affiliates</li>
                <li>Third-party service providers</li>
                <li>Law enforcement and regulatory agencies</li>
                <li>In the event of a merger or acquisition</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Information Security</p>
              <p className="">
                The Company takes reasonable precautions to protect User
                information from unauthorized access, disclosure, and use,
                including:
              </p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>Encrypting sensitive data</li>
                <li>Implementing secure communication channels</li>
                <li>Limiting access to sensitive data</li>
                <li>Regularly updating software and systems</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Data Retention</p>
              <p className="">
                The Company retains User information for as long as necessary to
                provide services and comply with legal and regulatory
                requirements.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">User Rights</p>
              <p className="">Users have the right to:</p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>Access and correct their personal information</li>
                <li>Request deletion of their personal information</li>
                <li>Object to processing of their personal information</li>
                <li>
                  Request restriction of processing of their personal
                  information
                </li>
                <li>Request transfer of their personal information</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Changes to this Privacy Policy</p>
              <p className="">
                The Company may update this Privacy Policy at any time. Users
                will be notified of any significant changes.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Contact Us</p>
              <p className="">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at info@coinreach.org
              </p>
            </div>
            <p className="">
              By using our services, Users acknowledge that they have read,
              understood, and agree to be bound by this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
