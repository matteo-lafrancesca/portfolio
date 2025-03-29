import React, { useState } from "react";
import Layout from "../layouts/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation simple
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Ici, vous pourriez ajouter votre logique d'envoi du formulaire
    // Par exemple avec fetch ou axios
    
    // Simuler une réponse réussie pour cet exemple
    setSuccess("Votre message a été envoyé avec succès!");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };
  
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-6 bg-base-200 text-base-content rounded-lg shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary">Contact</h2>
        <p className="text-lg text-neutral mt-4 leading-relaxed text-center">Vous pouvez me contacter via ce formulaire.</p>
        
        {success && (
          <div className="alert alert-success mt-4">
            <span>{success}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nom</span>
            </label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full bg-white focus:ring focus:ring-primary" 
            />
            {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full bg-base-100" 
            />
            {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full bg-base-100" 
              rows="4"
            ></textarea>
            {errors.message && <p className="text-error text-sm mt-1">{errors.message}</p>}
          </div>
          
          <button type="submit" className="btn btn-primary w-full">
            Envoyer
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;