export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-3xl font-bold mb-4 text-secondary-dark">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <section className="space-y-6 text-sm leading-relaxed text-gray-800">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the MIXER
          application (the &quot;Service&quot;). By accessing or using the Service, you agree to
          be bound by these Terms. If you do not agree to these Terms, you may not use the Service.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-secondary-dark">1. Service Description</h2>
        <p>
          The Service provides tools for AI research, experimentation, and related workflows. The
          Service may integrate with, or surface data from, third-party platforms and application
          programming interfaces (APIs), including providers such as DoorDash and others
          (&quot;Third-Party Providers&quot;). We are not affiliated with or endorsed by any
          Third-Party Provider unless explicitly stated.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-secondary-dark">
          2. Third-Party APIs &amp; DoorDash
        </h2>
        <p>
          When the Service accesses or displays information from DoorDash or other Third-Party
          Providers, your use of that information is additionally governed by the applicable terms,
          policies, and developer agreements of those providers, including any DoorDash Developer
          Terms and API usage policies. You agree:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Not to misuse or circumvent any technical or policy-based restrictions of APIs.</li>
          <li>
            Not to store, copy, or redistribute third-party data except as permitted by the
            applicable provider.
          </li>
          <li>
            To comply with all rate limits, attribution requirements, and security requirements
            imposed by Third-Party Providers.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-secondary-dark">3. Acceptable Use</h2>
        <p>
          You agree not to use the Service for any unlawful, harmful, or abusive purpose, including
          but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Engaging in fraud, harassment, or other illegal activities.</li>
          <li>
            Attempting to gain unauthorized access to any systems, networks, or data, including
            those of Third-Party Providers.
          </li>
          <li>
            Reverse engineering, decompiling, or otherwise attempting to derive source code from
            the Service except as permitted by law.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-secondary-dark">4. Accounts &amp; Security</h2>
        <p>
          You are responsible for maintaining the confidentiality of any credentials associated with
          your use of the Service and for all activities that occur under your account. You agree to
          promptly notify us of any unauthorized access or suspected security incident involving the
          Service.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-secondary-dark">5. Intellectual Property</h2>
        <p>
          The Service, including its content, features, and underlying technology, is owned or
          licensed by us and is protected by intellectual property and other laws. Except as
          expressly permitted, you may not copy, modify, distribute, or create derivative works
          based on the Service.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-secondary-dark">6. No Warranties</h2>
        <p>
          The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without
          warranties of any kind, whether express, implied, or statutory, including but not limited
          to implied warranties of merchantability, fitness for a particular purpose, and
          non-infringement. We do not guarantee the accuracy, completeness, or availability of any
          data, including data obtained from Third-Party Providers such as DoorDash.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-secondary-dark">7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, we will not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits or
          revenues, arising out of or in connection with your use of the Service, even if we have
          been advised of the possibility of such damages.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-secondary-dark">8. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time, with or without
          notice, if we believe you have violated these Terms, any applicable law, or our agreements
          with Third-Party Providers, or if we discontinue the Service.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-secondary-dark">9. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, the &quot;Last updated&quot; date
          at the top of this page will be revised. Your continued use of the Service after any
          changes become effective constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-secondary-dark">10. Contact</h2>
        <p>
          If you have any questions about these Terms or the Service, you can contact us at:
        </p>
        <p className="mt-1 font-mono text-xs break-all">
          your-email@example.com
        </p>
      </section>
    </main>
  );
}

