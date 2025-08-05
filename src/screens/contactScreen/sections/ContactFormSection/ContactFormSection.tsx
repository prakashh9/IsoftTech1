import React, { useState } from "react";

export const ContactFormSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const formFields = [
    {
      id: "name",
      label: "Full Name",
      placeholder: "Tell us who you are",
      type: "text"
    },
    {
      id: "email", 
      label: "Email Address",
      placeholder: "Where can we reach you?",
      type: "email"
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "Let's stay connected.",
      type: "tel"
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Tell us your Specific Case",
      type: "textarea",
    },
  ];

  const profileImages = [
    { src: "/ellipse-20.png", position: { top: "10%", right: "15%" } },
    { src: "/ellipse-21.png", position: { top: "25%", right: "5%" } },
    { src: "/ellipse-26.png", position: { top: "45%", right: "10%" } },
    { src: "/ellipse-23.png", position: { bottom: "30%", right: "20%" } },
    { src: "/ellipse-24.png", position: { bottom: "15%", right: "8%" } },
    { src: "/ellipse-25.png", position: { top: "35%", left: "8%" } },
    { src: "/ellipse-26.png", position: { bottom: "25%", left: "15%" } },
    { src: "/ellipse-20.png", position: { top: "20%", left: "12%" } },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full py-8 lg:py-12">
      <style >{`
        .form-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 28px;
          width: 100%;
          max-width: 480px;
        }

        .form-field {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          color: white;
          font-size: 14px;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          margin-bottom: 8px;
          text-align: left;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: white;
          font-size: 16px;
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input.error, .form-textarea.error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .form-input:focus, .form-textarea:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
          transform: scale(1.02);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .error-message {
          color: #ef4444;
          font-size: 12px;
          font-family: 'Poppins', sans-serif;
          margin-top: 4px;
          text-align: left;
        }

        .submit-btn {
          background: white;
          color: black;
          border: none;
          padding: 10px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: block;
          margin: 32px auto 0;
          position: relative;
          overflow: hidden;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
        }

        .submit-btn.loading::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          margin: -10px 0 0 -10px;
          border: 2px solid transparent;
          border-top: 2px solid #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .rings-container {
          position: relative;
          width: 600px;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ring {
          position: absolute;
          border: 1px solid #ff0000 !important;
          border-radius: 50%;
          animation: rotate 20s linear infinite;
          outline: none !important;
          box-shadow: none !important;
         
        }

        .ring-1 {
          width: 120px;
          height: 120px;
          animation-duration: 15s;
        }

        .ring-2 {
          width: 200px;
          height: 200px;
          animation-duration: 25s;
          animation-direction: reverse;
        }

        .ring-3 {
          width: 280px;
          height: 280px;
          animation-duration: 30s;
        }

        .ring-4 {
          width: 360px;
          height: 360px;
          animation-duration: 35s;
          animation-direction: reverse;
        }

        .ring-5 {
          width: 440px;
          height: 440px;
          animation-duration: 40s;
        }

        .profile-image {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          animation: float 3s ease-in-out infinite;
        }

        .profile-image:hover {
          transform: scale(1.2);
          border-color: #ff0000;
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
        }

        .profile-image:nth-child(odd) {
          animation-delay: -1.5s;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 1024px) {
          .rings-container {
            width: 400px;
            height: 400px;
          }

          .ring-1 { width: 80px; height: 80px; }
          .ring-2 { width: 140px; height: 140px; }
          .ring-3 { width: 200px; height: 200px; }
          .ring-4 { width: 260px; height: 260px; }
          .ring-5 { width: 320px; height: 320px; }

          .profile-image {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 768px) {
          .rings-container {
            width: 320px;
            height: 320px;
          }

          .ring-1 { width: 60px; height: 60px; }
          .ring-2 { width: 100px; height: 100px; }
          .ring-3 { width: 140px; height: 140px; }
          .ring-4 { width: 180px; height: 180px; }
          .ring-5 { width: 220px; height: 220px; }

          .profile-image {
            width: 45px;
            height: 45px;
          }

          .form-container {
            padding: 24px;
          }
        }
      `}</style>

      {/* Form Section */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.id} className="form-field">
              <label htmlFor={field.id} className="form-label">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  className={`form-textarea ${errors[field.id as keyof typeof errors] ? 'error' : ''}`}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className={`form-input ${errors[field.id as keyof typeof errors] ? 'error' : ''}`}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                />
              )}
              {errors[field.id as keyof typeof errors] && (
                <div className="error-message">
                  {errors[field.id as keyof typeof errors]}
                </div>
              )}
            </div>
          ))}
          
          <button 
            type="submit" 
            className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? '' : 'Send To Us'}
          </button>
        </form>
      </div>

      {/* Rings Animation Section */}
      <div className="rings-container">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
        <div className="ring ring-4"></div>
        <div className="ring ring-5"></div>
        
        {profileImages.map((img, index) => (
          <img
            key={`profile-${index}`}
            src={img.src}
            alt={`Profile ${index + 1}`}
            className="profile-image"
            style={{
              top: img.position.top,
              bottom: img.position.bottom,
              left: img.position.left,
              right: img.position.right,
              animationDelay: `${index * 0.3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};