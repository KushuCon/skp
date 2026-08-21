export const BUSINESS = {
  name: 'SKP ENTERPRISES',
  owner: 'Sachin Consul',
  phone: '9351587417',
  phoneDisplay: '+91 93515 87417',
  email: 'skpenterprisessc@gmail.com',
  address: 'Vaishali Nagar, Jaipur, Rajasthan',
  year: 2026,
  yearsExperience: '15+',
  clientsServed: '225+',
  whatsappLink: (msg = "Hi, I'd like to enquire about a booking with SKP Enterprises.") =>
    `https://wa.me/919351587417?text=${encodeURIComponent(msg)}`,
  mailLink: (subject = 'Enquiry — SKP Enterprises') =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=skpenterprisessc@gmail.com&su=${encodeURIComponent(subject)}`,
  telLink: 'tel:+919351587417',
};
