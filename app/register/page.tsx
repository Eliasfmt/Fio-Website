// // app/register/page.tsx
// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';

// export default function RegisterPage() {
//   const [step, setStep] = useState(1);

//   const next = () => setStep((prev) => prev + 1);
//   const prev = () => setStep((prev) => prev - 1);
//   const [students, setStudents] = useState([{}]);

//   return (
//     <main className="min-h-screen bg-yellow-50 p-6">
//       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
//         <h1 className="text-3xl font-bold text-primary mb-6 text-center">Registration</h1>

//         {step === 1 && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Referral Information</h2>

//             <div className="mb-4">
//               <label className="block font-medium text-gray-700 mb-1">How did you hear about us?</label>
//               <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
//                 <option value="">Please select</option>
//                 <option value="friend">Friend</option>
//                 <option value="social">Social Media</option>
//                 <option value="flyer">Flyer</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <label className="block font-medium text-gray-700 mb-1">Referral Name</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Referral Name"
//               />
//             </div>

//             <Button onClick={next} className="mt-4">Next</Button>
//           </div>
//         )}

//         {step === 2 && (
//         <div>
//             <h2 className="text-xl font-semibold mb-4">Family Information</h2>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">Family Last Name</label>
//             <input
//                 placeholder="Family Last Name"
//                 className="w-full border border-gray-300 rounded-md p-2"
//             />
//             </div>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">Home Address</label>
//             <input
//                 placeholder="Home Address"
//                 className="w-full border border-gray-300 rounded-md p-2"
//             />
//             </div>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">City</label>
//             <input
//                 placeholder="City"
//                 className="w-full border border-gray-300 rounded-md p-2"
//             />
//             </div>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">State</label>
//             <input
//                 placeholder="State"
//                 className="w-full border border-gray-300 rounded-md p-2"
//             />
//             </div>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">Zip Code</label>
//             <input
//                 placeholder="Zip Code"
//                 className="w-full border border-gray-300 rounded-md p-2"
//             />
//             </div>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">Primary Phone</label>
//             <input
//                 placeholder="Primary Phone"
//                 className="w-full border border-gray-300 rounded-md p-2"
//             />
//             </div>

//             <Button onClick={prev} className="mt-4 mr-2" variant="outline">Back</Button>
//             <Button onClick={next} className="mt-4">Next</Button>
//         </div>
//         )}

//         {step === 3 && (
//             <div>
//                 <h2 className="text-xl font-semibold mb-4">Primary Contact</h2>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">First Name</label>
//                 <input placeholder="First Name" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">Last Name</label>
//                 <input placeholder="Last Name" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">Relationship (Type)</label>
//                 <input placeholder="e.g. Mother, Father, Guardian" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <h3 className="text-lg font-medium mt-6 mb-2">How can we contact you?</h3>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">Home Phone</label>
//                 <input placeholder="Home Phone" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">Work Number</label>
//                 <input placeholder="Work Number" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">Cell Phone</label>
//                 <input placeholder="Cell Phone" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <Button onClick={prev} className="mt-4 mr-2" variant="outline">Back</Button>
//                 <Button onClick={next} className="mt-4">Next</Button>
//             </div>
//             )}


//             {step === 4 && (
//             <div>
//                 <h2 className="text-xl font-semibold mb-4">Secondary Contact</h2>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">First Name</label>
//                 <input placeholder="First Name" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">Last Name</label>
//                 <input placeholder="Last Name" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">Relationship (Type)</label>
//                 <input placeholder="e.g. Mother, Father, Guardian" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <h3 className="text-lg font-medium mt-6 mb-2">How can we contact you?</h3>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">Home Phone</label>
//                 <input placeholder="Home Phone" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">Work Number</label>
//                 <input placeholder="Work Number" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <div className="mb-4">
//                 <label className="block font-medium text-gray-700 mb-1">Cell Phone</label>
//                 <input placeholder="Cell Phone" className="w-full border border-gray-300 rounded-md p-2" />
//                 </div>

//                 <Button onClick={prev} className="mt-4 mr-2" variant="outline">Back</Button>
//                 <Button onClick={next} className="mt-4">Next</Button>
//             </div>
//             )}

        

//         {step === 5 && (
//         <div>
//         <h2 className="text-xl font-semibold mb-4">Student Information</h2>

//         {students.map((student, index) => (
//         <div key={index} className="mb-8 border-b border-gray-200 pb-6">
//             <h3 className="text-lg font-bold mb-4">Student #{index + 1}</h3>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">First Name</label>
//             <input placeholder="First Name" className="w-full border border-gray-300 rounded-md p-2" />
//             </div>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">Last Name</label>
//             <input placeholder="Last Name" className="w-full border border-gray-300 rounded-md p-2" />
//             </div>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">Gender</label>
//             <input placeholder="Gender" className="w-full border border-gray-300 rounded-md p-2" />
//             </div>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">Birth Date</label>
//             <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
//             </div>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">Allergies</label>
//             <input placeholder="List allergies or N/A" className="w-full border border-gray-300 rounded-md p-2" />
//             </div>

//             <div className="mb-4">
//             <label className="block font-medium text-gray-700 mb-1">Select Class</label>
//             <select className="w-full border border-gray-300 rounded-md p-2">
//                 <option value="">Please select</option>
//                 <option value="class1">Class 1</option>
//                 <option value="class2">Class 2</option>
//                 <option value="class3">Class 3</option>
//             </select>
//             </div>
//         </div>
//         ))}

//         <Button onClick={() => setStudents([...students, {}])} className="mb-6">Add Another Student</Button>
//         <div>
//         <Button onClick={prev} className="mt-4 mr-2" variant="outline">Back</Button>
//         <Button onClick={next} className="mt-4">Next</Button>
//         </div>
//         </div>
//         )}

//        {step === 6 && (
//   <div>
//     <h2 className="text-xl font-semibold mb-4">Required Policies</h2>
//     <p className="text-muted-foreground text-sm mb-6">
//       Please read and agree to the following:
//     </p>

//     {/* Liability Waiver */}
//     <div className="mb-6">
//       <div className="h-48 max-w-[600px] overflow-y-scroll bg-white border border-gray-300 p-4 rounded-md text-sm text-gray-700 whitespace-pre-wrap break-words">
//         Liability Waiver

// In consideration of membership with Little Steps and Palabras Pre-School (LSP) and being allowed to participate, now and in the future, in any and all Little Steps and Palabras Pre-School related programs, activities, and events, the undersigned hereby expressly agrees as follows:

// • I agree that I have voluntarily elected to become a member of Little Steps and Palabras Pre-School and I consent to the participation by my child in any and all LSP related programs, activities, and events. I agree, understand, and acknowledge that participation in LSP programs and activities by me and/or my child involves physical activity and inherent risk, which may or may not be obvious, of property damage, personal injury, and death. I assume all risk of property damage, personal injury, and death associated with and/or related to participation by me and/or my child in any and all LSP related programs, activities, and/or events.

// • I, on behalf of myself and my child, agree to waive, release, indemnify, hold harmless, and forever discharge all claims, demands, damages, lawsuits, liabilities, and related causes of action of every kind and nature, which I and/or my child have or may have in the future, against LSP, its officers, members, volunteers, directors, employees, or agents for injury, loss, death, costs or other damages to me or my child or our property arising from or otherwise related to participation in LSP programs or activities, whether such claim, demand, suit, or cause of action be a contract claim, negligence or other tort claim, or claim for insurance coverage.

// • I agree that this release and waiver is binding upon the undersigned and his/her respective spouse, children, heirs, next of kin, executors, administrators, representatives, successors and assigns. This release and waiver shall be subject to the laws of the State of [your state here]. The provisions of this release and waiver will remain in full force and effect even after termination of membership or cessation of participation in LSP programs, activities, and/or events.

// • I agree that LSP does not assume any responsibility for or obligation to provide me and/or my child with insurance coverage, directly or indirectly. LSP does not insure members or participants in its programs, activities, and/or events. I agree that it is my responsibility to provide insurance coverage for me and/or my child if I desire to have medical, health, disability, auto, or any other insurance coverage.

// I AGREE AND UNDERSTAND THAT BY MAKING AND SIGNING THIS RELEASE AND WAIVER OF LIABILITY THAT I SURRENDER VALUABLE LEGAL RIGHTS. I UNDERSTAND THE CONTENTS OF THIS RELEASE AND WAIVER OF LIABILITY AND AGREE TO BE BOUND BY IT VOLUNTARILY AND WILLINGLY.
//       </div>
//       <label className="mt-2 block">
//         <input type="checkbox" className="mr-2" />
//         I agree to the liability waiver
//       </label>
//     </div>

//     {/* Payment Policy */}
//     <div className="mb-6">
//     <div className="max-w-[600px] bg-white border border-gray-300 p-4 rounded-md text-sm text-gray-700 whitespace-pre-wrap break-words">
//         Preschool payments are due in full on the 1st of each month and have a grace period of 3 business days. There is no credit given for
//         holidays or absences due to illness or vacations. Payments may be made by card, check, Zelle, or Venmo. Checks are made payable to
//         Little Steps and Palabras Pre-School.
//       </div>
//       <label className="mt-2 block">
//         <input type="checkbox" className="mr-2" />
//         I agree to the payment policy
//       </label>
//     </div>

//     {/* Parent Handbook */}
//     <div className="mb-6">
//     <div className="max-w-[600px] bg-white border border-gray-300 p-4 rounded-md text-sm text-gray-700 whitespace-pre-wrap break-words">
//         I have read and understand that I must follow the Parent Handbook in order to enroll my child. The handbook includes detailed
//         expectations for attendance, communication, discipline, illness policy, and more.
//     </div>
//     <label className="mt-2 block">
//         <input type="checkbox" className="mr-2" />
//         I agree to the parent handbook
//     </label>
//     </div>

//     {/* Full name field */}
//     <input
//       type="text"
//       placeholder="Enter your full name"
//       className="input mb-4 w-full"
//     />

//     {/* Buttons */}
//     <div className="flex gap-4">
//       <Button onClick={prev} variant="outline">
//         Back
//       </Button>
//       <Button>
//         Submit Registration
//       </Button>
//     </div>
//   </div>
// )}


//       </div>
//     </main>
//   );
// } // Add CSS class 'input' to your global CSS for styling form inputs


// app/register/page.tsx
'use client';

import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-yellow-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">
          Registration
        </h1>

        <div className="w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc55KOMcN243vaGIyKHqQqy67FshR8GZqo04Gc-6FGDp7a7BA/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Preschool Registration"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </main>
  );
}