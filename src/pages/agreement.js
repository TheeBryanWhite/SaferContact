import React from 'react'
import {graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import './agreement.scss'

const MaPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Master Agreement" description="Safercontact, the dynamic contact tracing solution" />
	  <BackgroundImage
			className="subpage-hero"
			fluid={data.prismicPage.data.body[0].primary.hero_background_image.fluid}
			id="hero"
			Tag="section"
		>
			<div className="overlay">
				<div className="body container">
					<h2>Master Agreement</h2>
				</div>
			</div>
		</BackgroundImage>
		<section className="page-body pad-this" id="msa">
			<div className="container">
				<p>Important - Please read carefully; By signing up for Skylytic's service, you are acknowledging that you are an authorized by your organization to enter into this agreement, and if you are accepting on behalf of your employer or other entity("customer"), you represent and warrant that you have the legal right to bind said entity and agree to all the terms that are set forth as part of this agreement regarding customer's use of the Skylytic's service.  If you do not agree with the all the provisions described in this agreement or are not authorized to enter into this agreement, do not click on the "I AGREE", "I ACCEPT" or similar button, please click on the "I DISAGREE" button or close the window to cease the process of creating an account.</p>
				<p>Skylytics and Client hereby agree as follows:</p>
				<ol>
					<li>
						<p><u>Deliverables</u></p>
						<ol>
							<li><u>General</u>. Skylytics, itself and through its Affiliates (as defined herein), agrees to provide to Client, and Client agrees to obtain from Skylytics, the services (“<b>Services</b>”) and products (“<b>Products</b>”) (collectively, “<b>Deliverables</b>”) described in the attached Schedules, subject to the terms set forth in this Agreement and in the applicable Schedule. “<b>Affiliate</b>” means an entity that controls, is controlled by, or is under common control with a party, where “control” means the direct or indirect ownership of more than 50% of the voting securities of such entity or party. Each Schedule will be deemed to incorporate all of the terms of this Agreement. Use of the term “Schedule” throughout this Agreement shall include any exhibits attached to such Schedule.</li>
							<li><u>Additional Entities and Deliverables</u>. The parties or their Affiliates may add Deliverables to this Agreement by signing an appropriate new Schedule to this Agreement incorporating the added Deliverables and/or Affiliates, as applicable. When Deliverables are received by a Client Affiliate or provided by a Skylytics Affiliate under a Schedule, then for the purposes of that Schedule, references to “Client” or “Skylytics” in this Agreement will be deemed to include the applicable Client Affiliate or Skylytics Affiliate. An Affiliate’s execution of an amendment to receive or provide Deliverables hereunder shall constitute such Affiliate’s agreement to be bound by the terms of this Agreement.</li>
							<li><u>Alteration of Services; Change Orders</u>. Client requests to alter, modify, augment or otherwise deviate from the scope of work set forth in an Schedule (“<b>Additional Work</b>”) will be performed on a time and materials basis unless the parties initiate the change order process set forth herein. Additional Work shall be deemed accepted as performed.  To initiate the change order process, either party shall submit details of the requested change to the other in writing. Skylytics shall, within a reasonable time after such request (and, if such request is initiated by Client, not more than five (5) business days after receipt of Client’s written request), provide a written estimate to Customer of: (i) the likely time required to implement the change; (ii) any necessary variations to the fees and other charges for the Services arising from the change; (iii) the likely effect of the change on the Services; and (iv) any other impact the change might have on the performance of this Agreement. Promptly after receipt of the written estimate, the parties shall negotiate and agree in writing on the terms of such change (a “<b>Change Order</b>”). Neither party shall be bound by any Change Order unless mutually agreed upon in writing in accordance with <u>Section 9(b)</u>.</li>
							<li><u>Acceptance of Deliverables</u>. Deliverables identified in a particular Schedule shall be deemed accepted upon the earlier of: (i) Skylytics’s receipt of a project completion and acceptance document which has been signed and dated by an authorized representative of Client, or (ii) ten (10) calendar days from the date of delivery of the final Deliverable specified in the applicable Schedule. If acceptance is refused, Client shall provide written notice to Skylytics of its reasonable basis for refusal prior to the expiration of the ten (10) day acceptance period and Skylytics shall attempt to address the issue within a reasonable period of time, after which period, Skylytics shall re-initiate the acceptance confirmation procedure set forth herein. If the acceptance is refused a second time, the parties shall engage in the dispute resolution process set forth in <u>Section 8</u>.</li>
						</ol>
					</li>
					<li>
						<p><u>Fees for Deliverables</u></p>
						<ol>
							<li><u>General</u>. Client agrees to pay Skylytics (i) fees for Deliverables as specified in the Schedules, (ii) out-of- pocket and other additional charges pursuant to <u>Section 2(b)</u>, and (iii) Taxes as defined in <u>Section 2(c)</u>. Fees may be increased as set forth in the Schedules.</li>
							<li><u>Additional Charges</u>. Client shall pay travel and living expenses and other out-of-pocket expenses reasonably incurred by Skylytics in connection with the Deliverables. As applicable, such out-of-pocket expenses shall be incurred in accordance with Skylytics’s then-current corporate travel and expense policy. If an out-of-pocket expense is listed in a Schedule, such expense may be changed to reflect changes issued by the applicable vendor.</li>
							<li><u>Taxes</u>. Client is responsible for the payment of all sales, use, excise, value added, withholdings, and other taxes and duties however designated that are levied by any taxing authority relating to the Deliverables (“<b>Taxes</b>”). All Fees and other charges under any Schedule are exclusive of Taxes. Client shall reimburse Skylytics for those Taxes that Skylytics is required to remit on behalf of Client. In no event shall Taxes include taxes based on Skylytics’s income.</li>
							<li><u>Payment Terms</u>. Invoices are due and payable upon Client’s receipt of such invoice. The price included herein reflects a 3% discount for payment by cash, check or wire transfer. This discount will not apply in the event that Client pays using a credit or debit card. If any invoiced amounts remain unpaid 30 days after Client’s receipt of invoice, Client shall pay a monthly late charge based on the unpaid amounts equal to the lesser of 1.5% or the highest amount allowed by law until such invoice amount is paid in full. Client shall neither make nor assert any right of deduction or set-off from amounts invoiced. In addition to all other remedies available under this Agreement or at law (which Skylytics does not waive by the exercise of any rights hereunder), SkyTerrra shall be entitled to suspend the provision of any Services if Client fails to pay any undisputed fees when due hereunder and such failure continues for 30 days after Client’s receipt of invoice.</li>
						</ol>
					</li>
					<li>
						<p><u>Confidentiality and Ownership</u>. The provisions of this Section 3 survive any termination or expiration of this Agreement.</p>
						<ol>
							<li>
								<p>Definitions</p>
								<ol>
									<li>“<b>Client Information</b>” means the following types of information of Client and its Affiliates obtained or accessed by Skylytics from or on behalf of Client or its Affiliates in connection with this Agreement or any discussions between the parties regarding new services or products to be added to this Agreement: (A) trade secrets and proprietary information; (B) customer lists, business plans, information security plans, business continuity plans, and proprietary software programs; and (C) any other information received from or on behalf of Client or its Affiliates that Skylytics could reasonably be expected to know is confidential.</li>
									<li>“<b>Skylytics Information</b>” means the following types of information of Skylytics and its Affiliates obtained or accessed by Client from or on behalf of Skylytics or its Affiliates in connection with this Agreement or any discussions between the parties regarding new services or products to be added to this Agreement: (A) trade secrets and proprietary information (including that of any Skylytics client, vendor, or licensor); (B) client lists, information security plans, business continuity plans, all information and documentation regarding the Deliverables, and the terms and conditions of this Agreement; and (C) any other information and data received from or on behalf of Skylytics or its Affiliates that Client could reasonably be expected to know is confidential.</li>
									<li>“<b>Information</b>” means Client Information and/or Skylytics Information, as applicable. No obligation of confidentiality applies to any Information that: (A) the receiving entity (“<b>Recipient</b>”) already possesses without obligation of confidentiality, develops independently without reference to Information of the disclosing entity (“<b>Discloser</b>”), or rightfully receives without obligation of confidentiality from a third party; or (B) is or becomes publicly available without Recipient’s breach of this Agreement.</li>
								</ol>
							</li>
							<li><u>Obligations</u>. Recipient agrees to hold as confidential all Information it receives from the Discloser. All Information shall remain the property of Discloser or its suppliers and licensors. Recipient will use the same care and discretion to avoid disclosure of Information as it uses with its own similar information that it does not wish disclosed, but in no event less than a reasonable standard of care and no less than is required by law. Recipient may only use Information for the lawful purposes contemplated by this Agreement, including in the case of Skylytics use of Client Information for fulfilling its obligations under this Agreement performing, improving, and enhancing the Deliverables, and developing data analytics models to produce analytics-based offerings. Recipient may disclose Information to: (i) its employees and employees of permitted subcontractors and Affiliates who have a need to know; (ii) its attorneys and accountants as necessary in the ordinary course of its business; and (iii) any other party with Discloser’s prior written consent. Before disclosure to any of the above parties, Recipient will have a written agreement with (or in the case of clause (ii) a professional obligation of confidentiality from) such party sufficient to require that party to treat Information in accordance with the requirements of this Agreement, and Recipient will remain responsible for any breach of this Section 3 by any of the above parties. Skylytics as Recipient may also disclose Client Information to third party vendors designated by Client. Recipient may disclose Information to the extent required by law or legal process, provided that (A) Recipient gives Discloser prompt notice, if legally permissible, so that Discloser may seek a protective order, (B) Recipient reasonably cooperates with Discloser (at Discloser’s expense) in seeking such protective order, and (C) all Information shall remain subject to the terms of this Agreement in the event of such disclosure. At Recipient’s option, Information will be returned to Discloser or destroyed (except as may be contained in back-up files created in the ordinary course of business that are recycled in the ordinary course of business over an approximate 30- to 90-day period or such longer period as required by applicable law) at the termination or expiration of this Agreement or the applicable Schedule and, upon Discloser’s request, Recipient will certify to Discloser in writing that it has complied with the requirements of this sentence. Recipient acknowledges that any breach of this Section 3 may cause irreparable harm to Discloser for which monetary damages alone may be insufficient, and Recipient therefore acknowledges that Discloser shall have the right to seek injunctive or other equitable relief against such breach or threatened breach, in addition to all other remedies available to it at law or otherwise.</li>
							<li><u>Ownership</u>. Client acknowledges that Skylytics, its Affiliates, vendors, and/or its licensors retain all patents, trademarks and copyrights in and to all proprietary data, processes and programs, if any, provided in connection with Deliverables. Any Products provided to Client as part of the Services provided shall be subject to the vendor’s, licensors or OEM’s copyright and licensing policy.  To the extent software incorporated into the Deliverables is created by Skylytics, Client is granted a non-transferable, non-exclusive license for Client’s internal use only, subject strictly to the terms and conditions of this Agreement and shall terminate upon termination or expiration of this Agreement.  Client shall not duplicate, use or disclose for the benefit of third parties, reverse engineer or decompile any such software Products.<br /><br />Client is, and shall be, the sole and exclusive owner of all right, title and interest in and to the deliverables created from the Services, including all intellectual property rights therein. Skylytics agrees, and will cause its personnel to agree, that with respect to any deliverables that may qualify as “work made for hire” as defined in 17 U.S.C. §101, such deliverables are hereby deemed a “work made for hire” for Client. To the extent that any of the deliverables do not constitute a “work made for hire”, upon payment in full of all fees owed under the applicable Statement of Work, Skylytics hereby irrevocably assigns, and shall cause its personnel to irrevocably assign to Client, in each case without additional consideration, all right, title and interest throughout the world in and to the deliverables, including all intellectual property rights therein.</li>
							<li><u>Restrictions</u>. Without limiting any other obligation set forth in this Section 3, Client shall not use, transfer, distribute, interface, integrate, or dispose of any information or content contained in Deliverables in any manner that competes with the business of Skylytics. Except as expressly authorized in a Schedule, Client shall not: (i) use the Deliverables to provide services to third parties; or (ii) reproduce, republish or offer any part of the Deliverables (or compilations based on any part of the Deliverables) for sale or distribution in any form, over or through any medium.</li>
						</ol>
					</li>
					<li><u>Information Security</u>. As applicable to the Deliverables received by Client, Client agrees to comply with Skylytics’s then-current data encryption policies and controls regarding transmission to and from Skylytics of images and records maintained and produced by Skylytics for Client in connection with the Deliverables (“<b>Client Files</b>”), or other data transmitted to and from Skylytics in connection with the Deliverables (collectively with Client Files, “<b>Data</b>”). If Client requests or requires Skylytics to send, transmit, or otherwise deliver Data to Client or any third party in a non-compliant format or manner, or Client (or third party on Client’s behalf) sends, transmits or otherwise delivers Data to Skylytics in a non-compliant format or manner, then, notwithstanding any other provision of this Agreement: (i) Client understands and accepts all risk of transmitting Data in an unencrypted or otherwise noncompliant format; and (ii) Client releases, discharges, and shall indemnify and hold harmless Skylytics and its employees, officers, directors, agents, and Affiliates from any and all liability, damage, or other loss under this Agreement or otherwise suffered by or through Client or suffered by any of the indemnified entities arising out of the transmission, destruction, or loss of such Data, including without limitation any information security or privacy breach related to such Data.</li>
					<li>
						<p><u>Warranties</u></p>
						<ol>
							<li><u>By Skylytics</u>. Skylytics warrants that: (i) no contractual obligations exist that would prevent Skylytics from entering into this Agreement; (ii) it has the requisite authority to execute, deliver, and perform its obligations under this Agreement; (iii) the Service provided by Skylytics shall be provided by competent personnel in accordance with applicable professional standards; and (iv) the Deliverables conform to the technical specifications set forth in their applicable Schedules.</li>
							<li>THE WARRANTIES STATED ABOVE AND IN THE SCHEDULES, IF ANY, ARE LIMITED WARRANTIES AND ARE THE ONLY WARRANTIES MADE BY SKYLYTICS. SKYLYTICS DOES NOT REPRESENT THAT THE DELIVERABLES MEET CLIENT’S REQUIREMENTS OR THAT THE OPERATION OF THE DELIVERABLES WILL BE UNINTERRUPTED OR ERROR-FREE. CLIENT ACKNOWLEDGES THAT IT HAS INDEPENDENTLY EVALUATED THE DELIVERABLES AND THEIR APPLICATION TO CLIENT’S NEEDS. SKYLYTICS DISCLAIMS, AND CLIENT HEREBY EXPRESSLY WAIVES, ALL OTHER REPRESENTATIONS, CONDITIONS, OR WARRANTIES, EXPRESS AND IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NONINFRINGEMENT, AND ANY ARISING FROM A COURSE OF DEALING OR USAGE OR TRADE. IN ADDITION, TO THE EXTENT THAT SKYLYTICS PROVIDES SERVICES IN CONCERT WITH THIRD PARTY SOFTWARE OR SERVICE SOLUTIONS PROVIDERS, SUCH THIRD PARTY SOFTWARE OR SERVICE SOLUTIONS ARE PROVIDED WITHOUT WARRANTIES OF ANY KIND, EVEN IF SKYLYTICS RECOMMENDED SUCH SOFTWARE OR SERVICE SOLUTIONS.  SUCH THIRD PARTY MANUFACTURERS, SUPPLIERS, OR VENDORS MAY PROVIDE THEIR OWN WARRANTIES, AND SKYLYTICS AGREES TO INFORM CLIENT, UPON REQUEST (1) THE MANUFACTURER OR SUPPLIER WHO IS RESPONSIBLE FOR WARRANTY (IF ANY) RELATING THERETO, AND (2) THE PROCEDURE TO OBTAIN ANY WARRANTY SERVICE THEREON, IF KNOWN BY SKYLYTICS.</li>
							<li>CLIENT shall notify Skylytics in writing within thirty (30) days after completion of the Services when any of the Services fail to conform to the standard of care set forth in this Agreement. The passage of the thirty (30) day period after completion of the services without the notification described herein shall constitute CLIENT’s final acceptance of the Services. Troubleshooting and reconfiguration due to changes to the configuration BY CLIENT AFTER DELIVERY May be BillABLE AND Skylytics WILL BEST EFFORTS TO PROVIDE ADDITIONAL SUPPORT THAT MAY BE REQUIRED.</li>
						</ol>
					</li>
					<li><u>Limitation of Liability</u>. IN NO EVENT SHALL SKYLYTICS BE LIABLE FOR LOSS OF GOODWILL, OR FOR SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR TORT DAMAGES ARISING OUT OF OR RELATING TO THIS AGREEMENT, REGARDLESS OF WHETHER SUCH CLAIM ARISES IN TORT, CONTRACT, OR OTHERWISE. EXCEPT FOR CLAIMS RELATED TO PROPRIETARY RIGHTS OR PAYMENT OBLIGATIONS, NEITHER PARTY MAY ASSERT ANY CLAIM AGAINST THE OTHER RELATED TO THIS AGREEMENT MORE THAN 2 YEARS AFTER SUCH CLAIM ACCRUED. SKYLYTICS’S AGGREGATE LIABILITY TO CLIENT AND ANY THIRD PARTY FOR ANY AND ALL CLAIMS OR OBLIGATIONS RELATING TO THIS AGREEMENT SHALL BE LIMITED TO THE TOTAL FEES PAID BY CLIENT TO SKYLYTICS UNDER THE SCHEDULE RESULTING IN SUCH LIABILITY IN THE 2 MONTH PERIOD PRECEDING THE DATE THE CLAIM ACCRUED.</li>
					<li>
						<p><u>Term and Termination</u></p>
						<ol>
							<li><u>Term</u>. This Agreement shall be effective on the Effective Date and shall remain in effect until the term of all outstanding Schedules has expired or such Schedules have terminated, unless otherwise terminated as provided herein. The term for Deliverables may be set forth in the applicable Schedule. An Schedule that does not state a term will be effective from its last date of execution until terminated in accordance with this Agreement or the Schedule.</li>
							<li>
								<u>Termination</u>. In addition to termination rights set forth in any Schedule:
								<ol>
									<li>Either party may, upon written notice to the other, terminate: (A) any Schedule if the other party materially breaches its obligations under that Schedule or under this Agreement with respect to that Schedule; or (B) this Agreement if the other party materially breaches its obligations with respect to the non-breaching party’s Information or other intellectual property; and the breaching party fails to cure such material breach within 30 days following its receipt of written notice stating, with particularity and in reasonable detail, the nature of the claimed breach.</li>
									<li>If any invoice remains unpaid by Client for more than 30 days after due, Skylytics may, upon 30 days’ written notice to Client, terminate: (A) the Schedule and/or Client’s access to and use of Deliverables to which the payment failure relates; or (B) this Agreement if the unpaid amounts constitute a material portion of annual charges due under this Agreement.</li>
								</ol>
							</li>
							<li><u>Remedies</u>. Remedies contained in this Section 7 are cumulative and are in addition to the other rights and remedies available to Skylytics under this Agreement, by law or otherwise.</li>
						</ol>
					</li>
					<li>
						<p><u>Dispute Resolution</u></p>
						<p>Before initiating legal action against the other party relating to a dispute herein, the parties agree to work in good faith to resolve disputes and claims arising out of this Agreement. To this end, either party may request that each party designate an officer or other management employee with authority to bind such party to meet to resolve the dispute or claim. If the dispute is not resolved within 30 days of the commencement of informal efforts under this paragraph, either party may pursue formal legal action. This paragraph will not apply if expiration of the applicable time for bringing an action is imminent and will not prohibit a party from pursuing injunctive or other equitable relief to which it may be entitled.</p>
					</li>
					<li>
						<p><u>General</u></p>
						<ol>
							<li><u>Binding Agreement; Assignment</u>. This Agreement is binding upon the parties, their participating Affiliates, and their respective successors and permitted assigns. Neither this Agreement nor any part thereof or interest therein may be sold, assigned, transferred, pledged, or otherwise disposed of by Client, whether pursuant to change of control, by operation of law or otherwise, without Skylytics’s prior written consent. Client agrees that Skylytics may assign all or part of this Agreement and may subcontract any obligations to be performed hereunder; provided that any such subcontractors shall be required to comply with all applicable terms and conditions of this Agreement, and Skylytics shall remain primarily liable for the performance of any such subcontractors.</li>
							<li><u>Entire Agreement: Amendments</u>. This Agreement, including its Schedules, which are expressly incorporated herein by reference, constitutes the complete and exclusive statement of the agreement between the parties as to the subject matter hereof and supersedes all previous agreements with respect thereto and the terms of all existing or future purchase orders and acknowledgments. Each party hereby acknowledges that it has not been induced to enter into this Agreement by virtue of, and is not relying on, any representation made by the other party not embodied herein, any term sheets or other correspondence preceding the execution of this Agreement, or any prior course of dealing between the parties, including without limitation any statements concerning product or service usage or the financial condition of the parties. The protections of this Agreement shall apply to actions of the parties performed in preparation for and anticipation of the execution of this Agreement. Modifications of this Agreement must be in writing and signed by duly authorized representatives of the parties. If the terms of any Schedule conflict with the terms of this Agreement, this Agreement shall control unless the applicable Schedule expressly states that its terms control. If the terms of any Schedule conflict with the terms of the Schedule to which such Schedule is attached, the terms of the Schedule shall control.</li>
							<li><u>Severability</u>. If any provision of this Agreement is held to be unenforceable or invalid, the other provisions shall continue in full force and effect.</li>
							<li><u>Governing Law; Jury Trial Waiver</u>. This Agreement will be governed by the substantive laws of the State of New Hampshire, without reference to provisions relating to conflict of laws. The United Nations Convention on Contracts for the International Sale of Goods shall not apply to this Agreement. Any dispute relating directly or indirectly to this Agreement or any other contract or agreement between the parties which cannot be resolved through the process of consultation and negotiation shall be brought in a court of competent jurisdiction in the State of New Hampshire, that being the exclusive venue for any dispute between or any claims held by any of the parties to this Agreement. Both parties agree to waive any right to have a jury participate in the resolution of any dispute or claim between the parties or any of their respective Affiliates arising under this Agreement.</li>
							<li><u>Force Majeure</u>. With the exception of Client’s payment obligations, neither party shall be responsible for delays or failures in performance resulting from acts of God, acts of civil or military authority, fire, flood, strikes, war, epidemics, pandemics, shortage of power, telecommunications or Internet service interruptions, or other acts or causes reasonably beyond the control of that party. The party experiencing the force majeure event agrees to give the other party notice promptly following the occurrence of a force majeure event, and to use diligent efforts to re-commence performance as promptly as commercially practicable.</li>
							<li><u>Notices</u>. Any written notice required or permitted to be given hereunder shall be given by: (i) registered or certified mail, return receipt requested, postage prepaid; (ii) confirmed facsimile; or (iii) nationally recognized overnight courier service to the other party at the addresses listed on page 1 or to such other address or person as a party may designate in writing. All such notices shall be effective upon receipt.</li>
							<li><u>No Waiver</u>. The failure of either party to insist on strict performance of any of the provisions hereunder shall not be construed as the waiver of any subsequent default of a similar nature.</li>
							<li><u>Prevailing Party</u>. The prevailing party in any arbitration, suit, or action brought by one party against the other party to enforce the terms of this Agreement or any rights or obligations hereunder, shall be entitled to receive, in addition to such other relief as the arbitrators or court may award, its reasonable costs and expenses, including without limitation all attorneys’ fees, expert witness fees, litigation-related expenses and arbitrator and court or other costs incurred in such proceeding or otherwise in connection with bringing such arbitration, suit, or action. For purposes of this Agreement, a party is “prevailing” if that party prevails on the central issue raised in the action or claim, regardless of the amount of damages awarded or otherwise owed, if any. A party may prevail by judgment or decision in that party’s favor, consent decree, settlement agreement or voluntary dismissal with or without prejudice.</li>
							<li><u>Survival</u>. All rights and obligations of the parties under this Agreement that, by their nature, do not terminate with the expiration or termination of this Agreement shall survive the expiration or termination of this Agreement.</li>
							<li><u>Recruitment of Employees</u>. Client shall not, without Skylytics’s prior written consent, directly or indirectly, solicit for employment or hire any Restricted Employee (as defined herein) while such person is employed by Skylytics and for the 12-month period starting on the earlier of: (i) termination of such Restricted Employee’s employment with Skylytics, or (ii) termination or expiration of this Agreement. “<b>Restricted Employee</b>” means any former or current employee of Skylytics or its Affiliates that Client became aware of or came into contact with during Skylytics’s performance of its obligations under this Agreement. If Client breaches Section 9(j), Client shall, on demand, pay to Skylytics a sum equal to one (1) year’s basic salary or the annual fee that was payable by Skylytics to that employee, worker or independent contractor plus the recruitment costs incurred by Skylytics in replacing such person.</li>
							<li><u>Publicity</u>. Client and Skylytics shall have the right to make general references about each other and the type of Deliverables being provided hereunder to third parties, such as auditors, advisors and prospective customers and clients, provided that in so doing Client or Skylytics does not breach Section 3 of this Agreement. Skylytics may issue a press release regarding this Agreement, including its renewal and the addition of Deliverables, subject to Client’s review and approval, which shall not be unreasonably withheld or unduly delayed. Except as authorized herein, Client will not use the name, trademark, service mark, logo or other identifying marks of Skylytics or any of its Affiliates in any sales, marketing, or publicity activities, materials, or website display without the prior written consent of Skylytics.</li>
							<li><u>Independent Contractors</u>. Client and Skylytics expressly agree they are acting as independent contractors and under no circumstances shall any of the employees of one party be deemed the employees of the other for any purpose. Except as expressly authorized herein or in the Schedules, this Agreement shall not be construed as authority for either party to act for the other party in any agency or other capacity, or to make commitments of any kind for the account of or on behalf of the other.</li>
							<li><u>No Third-Party Beneficiaries</u>. Except as expressly set forth in any Schedule hereto, no third party shall be deemed to be an intended or unintended third-party beneficiary of this Agreement.</li>
							<li><u>Counterparts</u>. This Agreement and any Schedules hereto may be executed in counterparts, each of which shall be deemed an original and which shall together constitute one instrument. Signatures transmitted by facsimile or electronically via PDF or similar file delivery method shall have the same effect as an original signature, provided that in no event shall the Agreement or any amendment or other document hereunder be executed by placing or inserting a digital signature file into such document.</li>
						</ol>
					</li>
				</ol>
			</div>
		</section>
    </Layout>
  )
}

export const maQuery = graphql`
query AgreementQuery {
	prismicPage(uid: {eq: "home"}) {
	  uid
	  type
	  id
	  data {
		body {
		  ... on PrismicPageBodyHero {
			id
			slice_type
			primary {
			  hero_background_image {
				fluid {
				  src
				}
			  }
			}
		  }
		}
	  }
	}
  }
`

export default MaPage