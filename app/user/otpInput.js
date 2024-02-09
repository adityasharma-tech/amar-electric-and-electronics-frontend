import React, { useState, useRef } from 'react';

const OtpInput = ({ length = 6, onOtpChange,  children }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const otpInputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return; // Only accept numeric values
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Combine the OTP digits and pass them to the parent component
    const combinedOtp = updatedOtp.join('');
    onOtpChange(combinedOtp);

    // Move focus to the next input box if available
    if (index < length - 1 && otpInputRefs.current[index + 1]) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  const handleOtpPaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text/plain').slice(0, length);
    const pastedOtp = pastedData.split('').map((char) => parseInt(char, 10));
    const updatedOtp = [...otp];
    pastedOtp.forEach((digit, index) => {
      if (!isNaN(digit) && otpInputRefs.current[index]) {
        updatedOtp[index] = digit;
        otpInputRefs.current[index].value = digit; // Set input value
      }
    });
    setOtp(updatedOtp);

    // Combine the OTP digits and pass them to the parent component
    const combinedOtp = updatedOtp.join('');
    onOtpChange(combinedOtp);
  };

  const handleOtpInputFocus = (index) => {
    if (otpInputRefs.current[index]) {
      otpInputRefs.current[index].select();
    }
  };

  return (
    <>
      <div className='flex w-full justify-center gap-x-2 my-2'>
        {otp.map((digit, index) => (
          <input
          placeholder='-'
            className='block w-10 h-10 my-1 text-xl text-center border rounded-lg bg-zinc-100 focus:border-rose-400 focus:outline-none focus:ring ring-rose-400/40 focus:shadow-outline-rose text-gray-700 focus:shadow-outline-gray form-input'
            key={index}
            type="tel"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onFocus={() => handleOtpInputFocus(index)}
            onPaste={handleOtpPaste}
            ref={(ref) => (otpInputRefs.current[index] = ref)}
          />
        ))}
      {children}
      </div>
        </>
  );
};

export default OtpInput;
