type teamMember = {
  name:string,
  role:string,
  description:string,
  img:string,
  social:{twitter:string,
    facebook:string,
    instagram:string,
    linkedin:string
  }
}
const teamMembers = [
  {
    name: 'Walter White',
    role: 'Chief Executive Officer',
    description: 'Expert in strategic planning and corporate leadership, driving the company to success.',
    img: 'assets/img/team/team-1.jpg',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    description: 'Leading product development with a focus on innovation and customer satisfaction.',
    img: 'assets/img/team/team-2.jpg',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'William Anderson',
    role: 'CTO',
    description: 'Innovating technology solutions with a passion for solving complex problems.',
    img: 'assets/img/team/team-3.jpg',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Amanda Jepson',
    role: 'Accountant',
    description: 'Ensuring financial integrity and overseeing all accounting functions.',
    img: 'assets/img/team/team-4.jpg',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
];

const TeamMember = ({ member }: { member: teamMember }) => (
  <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
    <div className="team-member d-flex align-items-start">
      <div className="pic">
        <img src={member.img} className="img-fluid" alt={member.name} />
      </div>
      <div className="member-info">
        <h4>{member.name}</h4>
        <span>{member.role}</span>
        <p>{member.description}</p>
        <div className="social">
          <a href={member.social.twitter}><i className="bi bi-twitter-x"></i></a>
          <a href={member.social.facebook}><i className="bi bi-facebook"></i></a>
          <a href={member.social.instagram}><i className="bi bi-instagram"></i></a>
          <a href={member.social.linkedin}><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  </div>
);

const Team = () => (
  <section id="team" className="team section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Team</h2>
      <p>Our efforts lead to success, driven by a passion for excellence and a commitment to delivering top-notch solutions.</p>
    </div>

    <div className="container">
      <div className="row gy-4">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  </section>
);

export default Team;
