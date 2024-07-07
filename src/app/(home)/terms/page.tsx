import React from "react";

export default function Page() {
  return (
    <section className="bg-White">
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pb-16 pt-10 grid items-center">
        <p className="text-3xl mb-1">Terms & conditions</p>
        <div className="space-y-5">
          <p className="">
            In using this website you are deemed to have read and agreed to the
            following terms and conditions:
          </p>
          <div className="space-y-5">
            <div className="space-y-1">
              <p className="font-semibold">Introduction</p>
              <p>
                {`CoinReach (the "Company") is engaging remote workers (the
                "Workers") to provide services related to the conversion of fiat
                currency into digital currencies (such as cryptocurrencies) and
                the transfer of digital currencies to designated addresses.
                These Terms and Conditions outline the terms of this arrangement
                and are intended to protect the interests of both the Company
                and the Workers.`}
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Scope of Work</p>
              <p className="">Workers will:</p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>Receive fiat currency from clients or agents</li>
                <li>
                  Convert the fiat currency into digital currencies using
                  approved tools and platforms.
                </li>
                <li>
                  Transfer the digital currencies to designated addresses
                  provided by assigned agents
                </li>
                <li>
                  Maintain accurate and detailed records of transactions,
                  including but not limited to:
                </li>
                <li className="indent-5">Transaction amounts and dates</li>
                <li className="indent-5">Currency exchange rates</li>
                <li className="indent-5">Digital currency addresses</li>
                <li className="indent-5">Client or agent information</li>
                <li>
                  Perform other tasks as reasonably requested by the Company or
                  its agents
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Responsibilities</p>
              <p className="">Workers are responsible for:</p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>Completing tasks efficiently and accurately</li>
                <li>
                  Maintaining confidentiality and security of client information
                  and transactions
                </li>
                <li>
                  Complying with all applicable laws and regulations, including
                  but not limited to:
                </li>
                <li className="indent-5">
                  Anti-money laundering (AML) regulations
                </li>
                <li className="indent-5">
                  Know-your-customer (KYC) regulations
                </li>
                <li className="indent-5">Tax laws and regulations</li>
                <li>Using approved tools and platforms for transactions</li>
                <li>
                  Keeping software and systems up to date with the latest
                  security patches and updates
                </li>
                <li>
                  Notifying the Company immediately of any errors,
                  discrepancies, or security breaches
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Payment Terms</p>
              <p className="">
                Workers will be paid a commission on each successful
                transaction, as agreed upon in their contract. Payments will be
                made in a timely manner, provided that the Worker has completed
                all tasks and met all responsibilities.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Confidentiality and Security</p>
              <p className="">
                Workers must maintain confidentiality and security of client
                information and transactions. Workers must also comply with the
                Company's data protection policies and procedures, which may
                include:
              </p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>Encrypting sensitive data</li>
                <li>Using secure communication channels</li>
                <li>Implementing strong password policies</li>
                <li>Limiting access to sensitive data</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Intellectual Property</p>
              <p className="">
                Workers assign all intellectual property rights to the Company
                for any materials or work product created during their
                engagement, including but not limited to:
              </p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>Software code</li>
                <li>Documents and reports</li>
                <li>Marketing materials</li>
                <li>Training materials</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Termination</p>
              <p className="">
                Either party may terminate this agreement with written notice.
                Workers must return all Company property and confidential
                information upon termination, including but not limited to:
              </p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>Equipment and software</li>
                <li>Documents and records</li>
                <li>Client information</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Indemnification</p>
              <p className="">
                Workers agree to indemnify the Company against any losses or
                damages arising from their actions or omissions, including but
                not limited to:
              </p>
              <ul className="*:list-item *:list-inside *:list-disc space-y-2">
                <li>Errors or omissions in transactions</li>
                <li>Security breaches</li>
                <li>Violations of laws or regulations</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Governing Law</p>
              <p className="">
                These Terms and Conditions will be governed by and construed in
                accordance with the laws of United State of America.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Entire Agreement</p>
              <p className="">
                These Terms and Conditions constitute the entire agreement
                between the parties and supersede all prior or contemporaneous
                agreements.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Amendments</p>
              <p className="">
                The Company may amend these Terms and Conditions at any time,
                and Workers will be notified of any changes. Continued
                performance by the Worker will constitute acceptance of the
                amended Terms and Conditions.
              </p>
            </div>
            <p className="">
              By accepting this agreement, Workers acknowledge that they have
              read, understood, and agree to be bound by these
              Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
