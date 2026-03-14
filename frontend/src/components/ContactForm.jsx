import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just show success message (no backend storage)
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  if (submitted) {
    return (
      <div
        className="bg-[#0A0A18] border border-[#39FF14]/30 rounded-xl p-8 text-center"
        data-testid="contact-form-success"
      >
        <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[#39FF14]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-[#94A3B8] mb-6">
          Thanks for reaching out. We'll get back to you as soon as possible.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          className="bg-[#007AFF] hover:bg-[#0066CC] text-white font-bold uppercase"
          data-testid="send-another-btn"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0A0A18] border border-white/5 rounded-xl p-6 md:p-8 space-y-6"
      data-testid="contact-form"
    >
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[#F8FAFC]">
          Your Name *
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
          className="bg-[#050510] border-[#1E293B] text-white placeholder:text-[#475569] focus:border-[#007AFF]"
          data-testid="contact-name-input"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#F8FAFC]">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="bg-[#050510] border-[#1E293B] text-white placeholder:text-[#475569] focus:border-[#007AFF]"
            data-testid="contact-email-input"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#F8FAFC]">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="bg-[#050510] border-[#1E293B] text-white placeholder:text-[#475569] focus:border-[#007AFF]"
            data-testid="contact-phone-input"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#F8FAFC]">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="How can we help you?"
          rows={5}
          className="bg-[#050510] border-[#1E293B] text-white placeholder:text-[#475569] focus:border-[#007AFF] resize-none"
          data-testid="contact-message-input"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#007AFF] hover:bg-[#0066CC] text-white font-bold uppercase tracking-wide py-6 shadow-[0_0_15px_rgba(0,122,255,0.3)]"
        data-testid="contact-submit-btn"
      >
        <Send className="w-5 h-5 mr-2" />
        Send Message
      </Button>
    </form>
  );
};
