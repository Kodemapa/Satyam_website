// Chatbot Widget JavaScript
const knowledgeBase = [
  { "id": 1, "keywords": ["hi", "hello", "hey", "greetings"], "answer": "Hello! Welcome to Satyam International School. How can I help you today?" },
  { "id": 2, "keywords": ["good morning", "good afternoon", "good evening"], "answer": "Good day! How can I assist you with Satyam International School?" },
  { "id": 3, "keywords": ["who are you", "what is this", "are you a bot"], "answer": "I am the Satyam International School virtual assistant, here to answer your questions." },
  { "id": 4, "keywords": ["bye", "goodbye", "see you"], "answer": "Goodbye! Feel free to reach out if you have more questions." },
  { "id": 5, "keywords": ["thank you", "thanks"], "answer": "You're welcome! Let me know if you need anything else." },
  { "id": 6, "keywords": ["name of school", "school name"], "answer": "We are Satyam International School, Ballari." },
  { "id": 7, "keywords": ["location", "address", "where is"], "answer": "We are located at: After 2nd Canal, Kappagal Village Road, Ballari, Karnataka 583103." },
  { "id": 8, "keywords": ["contact number", "phone number", "call"], "answer": "You can call us at +91 9620381111." },
  { "id": 9, "keywords": ["email", "mail id"], "answer": "Our email address is info@satyaminternationalschool.com." },
  { "id": 10, "keywords": ["whatsapp", "chat link"], "answer": "You can chat with us on WhatsApp at +91 9620381111." },
  { "id": 11, "keywords": ["principal", "head of school"], "answer": "Our school is led by a dedicated Principal and management team focused on academic excellence." },
  { "id": 12, "keywords": ["chairman", "founder"], "answer": "Our Founder is Lion A. Satyanarayana and our Chairperson is Mrs. R. Surekha." },
  { "id": 13, "keywords": ["director"], "answer": "Our Director is Mr. R. Jagadeesh Kumar." },
  { "id": 14, "keywords": ["management"], "answer": "The school is managed by experienced leaders dedicated to holistic education." },
  { "id": 15, "keywords": ["office hours", "working hours"], "answer": "The school office is open from 9:00 AM to 4:00 PM, Monday to Saturday." },
  { "id": 16, "keywords": ["admission open", "admission 2025"], "answer": "Yes, admissions are open for the academic year 2025-26." },
  { "id": 17, "keywords": ["apply for admission", "how to join"], "answer": "You can apply by visiting the school office or contacting us via WhatsApp." },
  { "id": 18, "keywords": ["admission form", "application form"], "answer": "Application forms are available at the school office." },
  { "id": 19, "keywords": ["lkg admission", "nursery admission"], "answer": "LKG admissions are open. The child must meet the age criteria as per government rules." },
  { "id": 20, "keywords": ["ukg admission"], "answer": "UKG admissions are currently open." },
  { "id": 21, "keywords": ["class 1 admission", "grade 1"], "answer": "Admissions for Grade 1 are open. Please visit the campus for details." },
  { "id": 22, "keywords": ["class 10 admission", "grade 10"], "answer": "For Grade 10 admissions, previous academic records and a transfer certificate are mandatory." },
  { "id": 23, "keywords": ["documents required", "docs needed"], "answer": "You generally need the Birth Certificate, Aadhar Card, Photos, and Transfer Certificate (for higher grades)." },
  { "id": 24, "keywords": ["age limit", "age criteria"], "answer": "Age criteria follow the Karnataka state education department guidelines." },
  { "id": 25, "keywords": ["seat availability", "vacancies"], "answer": "Seats are limited. Please contact the office immediately to check availability." },
  { "id": 26, "keywords": ["entrance exam", "admission test"], "answer": "For higher grades, a basic proficiency test may be conducted." },
  { "id": 27, "keywords": ["admission deadline", "last date"], "answer": "Admissions are on a first-come, first-served basis. We recommend applying early." },
  { "id": 28, "keywords": ["mid-term admission", "transfer admission"], "answer": "Mid-term admissions depend on seat availability and transfer reasons. Please meet the Principal." },
  { "id": 29, "keywords": [ "mandatory disclosure"], "answer": "Our mandatory disclosure document is available on the website footer." },
  { "id": 30, "keywords": ["school code", "affiliation number"], "answer": "We are a CBSE affiliated school. Please check the website footer for specific codes." },
  { "id": 31, "keywords": ["fee structure", "tuition fee"], "answer": "The fee structure varies by grade. Please contact the accounts department at the school for the chart." },
  { "id": 32, "keywords": ["transport fee", "bus fee"], "answer": "Transport fees depend on the distance and route. It is charged separately from tuition." },
  { "id": 33, "keywords": ["hostel fee", "boarding fee"], "answer": "Hostel fees include lodging and food. Please inquire at the office for current rates." },
  { "id": 34, "keywords": ["payment mode", "how to pay"], "answer": "Fees can be paid via Bank Transfer, UPI, or at the school counter." },
  { "id": 35, "keywords": ["installments", "pay in parts"], "answer": "We generally allow fee payment in terms. Please check with the office for the schedule." },
  { "id": 36, "keywords": ["books fee", "uniform fee"], "answer": "Books and uniforms are usually purchased separately or as a kit at the start of the year." },
  { "id": 37, "keywords": ["scholarship", "financial aid"], "answer": "Merit-based concessions may be available. Please discuss with the management." },
  { "id": 38, "keywords": ["refund policy"], "answer": "Fee refund policies are subject to school management rules." },
  { "id": 39, "keywords": ["sibling discount"], "answer": "Please ask the administration office regarding sibling concessions." },
  { "id": 40, "keywords": ["online payment"], "answer": "Yes, online bank transfer details can be obtained from the accounts office." },
  { "id": 41, "keywords": ["syllabus", "curriculum"], "answer": "We follow the Central Board of Secondary Education (CBSE) curriculum." },
  { "id": 42, "keywords": ["medium of instruction", "language"], "answer": "The medium of instruction is English." },
  { "id": 43, "keywords": ["second language", "hindi", "kannada"], "answer": "We offer Hindi and Kannada as language options as per CBSE norms." },
  { "id": 44, "keywords": ["class strength", "student teacher ratio"], "answer": "We maintain an optimal student-teacher ratio to ensure individual attention." },
  { "id": 45, "keywords": ["homework", "assignments"], "answer": "We believe in balanced homework that reinforces learning without burdening the child." },
  { "id": 46, "keywords": ["exams", "assessment"], "answer": "We follow the CBSE assessment pattern including Periodic Tests and Term Exams." },
  { "id": 47, "keywords": ["report card", "results"], "answer": "Report cards are issued after every term during Parent-Teacher Meetings." },
  { "id": 48, "keywords": ["remedial classes", "extra class"], "answer": "We provide remedial classes for students who need extra support." },
  { "id": 49, "keywords": ["olympiad", "competitive exams"], "answer": "Yes, we offer Olympiad preparation and support for competitive exams." },
  { "id": 50, "keywords": ["teaching method", "pedagogy"], "answer": "We use smart classes and activity-based learning methods." },
  { "id": 51, "keywords": ["facilities", "infrastructure"], "answer": "We have smart classrooms, labs, a library, sports grounds, and transport facilities." },
  { "id": 52, "keywords": ["smart class", "digital class"], "answer": "Yes, our classrooms are equipped with smart boards and digital learning tools." },
  { "id": 53, "keywords": ["computer lab"], "answer": "We have an advanced computer lab with high-speed internet." },
  { "id": 54, "keywords": ["science lab"], "answer": "Our science labs are fully equipped for Physics, Chemistry, and Biology practicals." },
  { "id": 55, "keywords": ["library"], "answer": "We have a well-stocked library with a vast collection of books." },
  { "id": 56, "keywords": ["playground", "play area"], "answer": "We have a large playground for outdoor sports and a kids' play area." },
  { "id": 57, "keywords": ["auditorium", "hall"], "answer": "We have a multipurpose hall for events and assemblies." },
  { "id": 58, "keywords": ["cafeteria", "canteen"], "answer": "We provide hygienic food facilities for hostel students and day boarders." },
  { "id": 59, "keywords": ["toilets", "washroom"], "answer": "Clean and hygienic washrooms are available on every floor." },
  { "id": 60, "keywords": ["water", "drinking water"], "answer": "RO purified drinking water is available throughout the campus." },
  { "id": 61, "keywords": ["sports", "games"], "answer": "We offer Football, Basketball, Cricket, Athletics, and Swimming." },
  { "id": 62, "keywords": ["swimming pool"], "answer": "Yes, we have a swimming pool with a trained coach." },
  { "id": 63, "keywords": ["cricket"], "answer": "We have cricket coaching and practice nets." },
  { "id": 64, "keywords": ["football"], "answer": "We have a football ground and a school team." },
  { "id": 65, "keywords": ["basketball"], "answer": "We have a basketball court for students." },
  { "id": 66, "keywords": ["indoor games"], "answer": "We have facilities for Chess, Carrom, and Table Tennis." },
  { "id": 67, "keywords": ["karate", "martial arts"], "answer": "Karate classes are conducted for self-defense training." },
  { "id": 68, "keywords": ["yoga"], "answer": "Yoga sessions are held regularly for physical and mental wellness." },
  { "id": 69, "keywords": ["dance", "music"], "answer": "We have dedicated rooms and teachers for dance and music classes." },
  { "id": 70, "keywords": ["art and craft"], "answer": "Art and craft are integral parts of our curriculum." },
  { "id": 71, "keywords": ["hostel", "boarding"], "answer": "Yes, we provide residential facilities for boys and girls." },
  { "id": 72, "keywords": ["hostel food", "mess"], "answer": "The hostel mess serves nutritious and hygienic vegetarian food." },
  { "id": 73, "keywords": ["hostel safety", "warden"], "answer": "Hostels are supervised by wardens and have 24/7 security." },
  { "id": 74, "keywords": ["hostel rooms"], "answer": "Rooms are spacious, well-ventilated, and furnished." },
  { "id": 75, "keywords": ["laundry"], "answer": "Laundry facilities are available for hostel students." },
  { "id": 76, "keywords": ["medical", "doctor"], "answer": "We have first aid on campus and a doctor on call for emergencies." },
  { "id": 77, "keywords": ["visiting hours"], "answer": "Parents can visit hostel students during scheduled visiting hours on weekends." },
  { "id": 78, "keywords": ["transport", "bus"], "answer": "We have a fleet of school buses covering Ballari and surrounding areas." },
  { "id": 79, "keywords": ["bus route", "route map"], "answer": "Routes cover most major areas in Ballari. Contact the transport manager for specific stops." },
  { "id": 80, "keywords": ["driver", "safety"], "answer": "Our drivers are experienced, and buses are equipped with safety features." },
  { "id": 81, "keywords": ["gps", "tracking"], "answer": "We ensure the safety of students during transit." },
  { "id": 82, "keywords": ["van"], "answer": "We operate buses and vans depending on the route size." },
  { "id": 83, "keywords": ["own transport"], "answer": "Parents can also choose to drop and pick up their children personally." },
  { "id": 84, "keywords": ["cctv", "camera"], "answer": "The entire campus is under CCTV surveillance for safety." },
  { "id": 85, "keywords": ["security", "guards"], "answer": "Professional security guards are stationed at the gates 24/7." },
  { "id": 86, "keywords": ["fire safety"], "answer": "The school is equipped with fire extinguishers and follows safety norms." },
  { "id": 87, "keywords": ["visitor policy"], "answer": "All visitors must register at the gate before entering." },
  { "id": 88, "keywords": ["school timing", "class timing"], "answer": "Classes usually run from 9:00 AM to 3:45 PM." },
  { "id": 89, "keywords": ["uniform", "dress code"], "answer": "Students must wear the prescribed school uniform daily." },
  { "id": 90, "keywords": ["shoes"], "answer": "Black shoes and school socks are part of the uniform." },
  { "id": 91, "keywords": ["id card"], "answer": "Wearing the ID card is mandatory for all students." },
  { "id": 92, "keywords": ["attendance"], "answer": "75% attendance is mandatory for appearing in final exams." },
  { "id": 93, "keywords": ["leave", "absent"], "answer": "Leave applications must be signed by parents and submitted to the class teacher." },
  { "id": 94, "keywords": ["mobile phone", "gadgets"], "answer": "Students are not allowed to bring mobile phones to school." },
  { "id": 95, "keywords": ["discipline"], "answer": "We maintain strict discipline regarding behavior and punctuality." },
  { "id": 96, "keywords": ["ptm", "parent teacher meeting"], "answer": "PTMs are conducted regularly to discuss student progress." },
  { "id": 97, "keywords": ["communication"], "answer": "We communicate via WhatsApp, SMS, and the student diary." },
  { "id": 98, "keywords": ["complaint", "suggestion"], "answer": "You can drop suggestions in the box at the office or email the principal." },
  { "id": 99, "keywords": ["events"], "answer": "We celebrate Annual Day, Sports Day, and various cultural festivals." },
  { "id": 100, "keywords": ["field trip", "excursion"], "answer": "Educational tours and field trips are organized annually." },
  { "id": 101, "keywords": ["summer camp"], "answer": "We often organize summer camps for sports and arts." },
  { "id": 102, "keywords": ["holiday list"], "answer": "The holiday list is provided in the student diary." },
  { "id": 103, "keywords": ["winter break"], "answer": "Winter break dates will be announced in December." },
  { "id": 104, "keywords": ["summer vacation"], "answer": "Summer vacation usually starts in April/May." },
  { "id": 105, "keywords": ["books list"], "answer": "The textbook list is available at the administrative office." },
  { "id": 106, "keywords": ["stationery"], "answer": "Basic stationery may be available at the school store." },
  { "id": 107, "keywords": ["bag"], "answer": "Students should carry the school-prescribed bag." },
  { "id": 108, "keywords": ["lunch box"], "answer": "Day scholars should bring healthy vegetarian food for lunch." },
  { "id": 109, "keywords": ["snacks"], "answer": "A short break is provided for snacks in the morning." },
  { "id": 110, "keywords": ["math"], "answer": "Mathematics is taught with a focus on problem-solving." },
  { "id": 111, "keywords": ["science"], "answer": "Science is taught through theory and practical experiments." },
  { "id": 112, "keywords": ["social studies"], "answer": "Social Science covers History, Civics, and Geography." },
  { "id": 113, "keywords": ["coding"], "answer": "Basic computer coding is introduced in higher grades." },
  { "id": 114, "keywords": ["robotics"], "answer": "We organize robotics workshops occasionally." },
  { "id": 115, "keywords": ["alumni"], "answer": "Our alumni network is growing every year." },
  { "id": 116, "keywords": ["achievements"], "answer": "Our students regularly win inter-school competitions." },
  { "id": 117, "keywords": ["awards"], "answer": "The school has received awards for excellence in education." },
  { "id": 118, "keywords": ["bellary", "ballari"], "answer": "We are proud to be one of the top schools in Ballari." },
  { "id": 119, "keywords": ["kappagal road"], "answer": "We are located on Kappagal Village Road." },
  { "id": 120, "keywords": ["landmark"], "answer": "We are located after the 2nd Canal." },
  { "id": 121, "keywords": ["online class"], "answer": "Online classes are conducted only during emergencies or lockdowns." },
  { "id": 122, "keywords": ["app"], "answer": "We may use a school app for updates; please check with the office." },
  { "id": 123, "keywords": ["website"], "answer": "You are currently on our official website." },
  { "id": 124, "keywords": ["facebook"], "answer": "Follow us on Facebook for photos and updates." },
  { "id": 125, "keywords": ["instagram"], "answer": "Follow our Instagram handle for event highlights." },
  { "id": 126, "keywords": ["boy hostel"], "answer": "We have a dedicated hostel for boys." },
  { "id": 127, "keywords": ["girl hostel"], "answer": "We have a safe and separate hostel for girls." },
  { "id": 128, "keywords": ["gate pass"], "answer": "A gate pass is required to take a student out during school hours." },
  { "id": 129, "keywords": ["late arrival"], "answer": "Latecomers must report to the office before entering class." },
  { "id": 130, "keywords": ["prayer"], "answer": "The day starts with the school assembly and prayer." },
  { "id": 131, "keywords": ["environment"], "answer": "We maintain a green and pollution-free campus." },
  { "id": 132, "keywords": ["parking"], "answer": "Parking is available for parents outside the main gate." },
  { "id": 133, "keywords": ["career counseling"], "answer": "We provide career guidance for 10th-grade students." },
  { "id": 134, "keywords": ["ntse"], "answer": "We help students prepare for exams like NTSE." },
  { "id": 135, "keywords": ["quiz"], "answer": "Inter-house quiz competitions are held regularly." },
  { "id": 136, "keywords": ["house system"], "answer": "Students are divided into houses for sports and cultural activities." },
  { "id": 137, "keywords": ["pre-primary"], "answer": "Our pre-primary section focuses on play-way methodology." },
  { "id": 138, "keywords": ["primary school"], "answer": "Primary school covers grades 1 to 5." },
  { "id": 139, "keywords": ["middle school"], "answer": "Middle school covers grades 6 to 8." },
  { "id": 140, "keywords": ["high school"], "answer": "High school covers grades 9 and 10." },
  { "id": 141, "keywords": ["birthday"], "answer": "Students can wear colored clothes on their birthdays." },
  { "id": 142, "keywords": ["chocolates"], "answer": "Distribution of expensive gifts is not allowed; simple chocolates are permitted." },
  { "id": 143, "keywords": ["diary"], "answer": "The school diary is the main mode of communication." },
  { "id": 144, "keywords": ["projector"], "answer": "Classrooms are equipped with projectors for visual learning." },
  { "id": 145, "keywords": ["locker"], "answer": "Lockers may be available for senior students; check with the class teacher." },
  { "id": 146, "keywords": ["water cooler"], "answer": "Water coolers are placed on every floor." },
  { "id": 147, "keywords": ["generator"], "answer": "The school has power backup to ensure uninterrupted classes." },
  { "id": 148, "keywords": ["solar"], "answer": "We promote eco-friendly energy usage." },
  { "id": 149, "keywords": ["rainwater harvesting"], "answer": "We practice rainwater harvesting on campus." },
  { "id": 150, "keywords": ["values"], "answer": "We emphasize moral values, discipline, and respect." }
];
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const toggleIcon = document.getElementById('toggle-icon');
const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const typingIndicator = document.getElementById('typing');
const notificationBadge = document.getElementById('notification');
let isChatOpen = false;
function toggleChat() {
  isChatOpen = !isChatOpen;
  if (isChatOpen) {
    chatContainer.classList.add('active');
    chatToggle.classList.add('active');
    toggleIcon.textContent = '✕';
    messageInput.focus();
    notificationBadge.style.display = 'none';
  } else {
    chatContainer.classList.remove('active');
    chatToggle.classList.remove('active');
    toggleIcon.textContent = '🤖';
  }
}
setTimeout(() => {
  if (!isChatOpen) {
    notificationBadge.style.display = 'flex';
  }
}, 2000);
function findAnswer(userMessage) {
  const message = userMessage.toLowerCase().trim();
  for (let item of knowledgeBase) {
    for (let keyword of item.keywords) {
      if (message === keyword.toLowerCase()) {
        return item.answer;
      }
    }
  }
  let bestMatch = null;
  let highestScore = 0;
  for (let item of knowledgeBase) {
    let score = 0;
    for (let keyword of item.keywords) {
      if (message.includes(keyword.toLowerCase())) {
        score += keyword.length;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }
  if (bestMatch && highestScore > 0) {
    return bestMatch.answer;
  }
  return null;
}
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}
function addMessage(text, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = isUser ? '👤' : '🤖';
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.textContent = text;
  const time = document.createElement('div');
  time.className = 'message-time';
  time.textContent = getCurrentTime();
  contentDiv.appendChild(bubble);
  contentDiv.appendChild(time);
  messageDiv.appendChild(avatar);
  messageDiv.appendChild(contentDiv);
  const typingParent = typingIndicator.closest('.message');
  messagesContainer.insertBefore(messageDiv, typingParent);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
function addWhatsAppMessage() {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message bot';
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = '🤖';
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.innerHTML = `I don't have specific information about that. For detailed assistance, please contact us directly:<br><a href="https://wa.me/919620381111" target="_blank" class="whatsapp-link">🤖 Chat on WhatsApp</a>`;
  const time = document.createElement('div');
  time.className = 'message-time';
  time.textContent = getCurrentTime();
  contentDiv.appendChild(bubble);
  contentDiv.appendChild(time);
  messageDiv.appendChild(avatar);
  messageDiv.appendChild(contentDiv);
  const typingParent = typingIndicator.closest('.message');
  messagesContainer.insertBefore(messageDiv, typingParent);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
function showTyping() {
  typingIndicator.classList.add('active');
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
function hideTyping() {
  typingIndicator.classList.remove('active');
}
function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;
  addMessage(text, true);
  messageInput.value = '';
  sendButton.disabled = true;
  showTyping();
  setTimeout(() => {
    hideTyping();
    const answer = findAnswer(text);
    if (answer) {
      addMessage(answer);
    } else {
      addWhatsAppMessage();
    }
  }, 800 + Math.random() * 800);
}
function sendQuickMessage(type) {
  const quickMessages = {
    'admission': 'Tell me about admissions',
    'fee': 'What is the fee structure?',
    'location': 'Where is the school located?',
    'contact': 'How can I contact you?'
  };
  messageInput.value = quickMessages[type] || '';
  sendMessage();
}
messageInput.addEventListener('input', () => {
  sendButton.disabled = messageInput.value.trim() === '';
});
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !sendButton.disabled) {
    sendMessage();
  }
});
chatToggle.addEventListener('click', toggleChat);
sendButton.addEventListener('click', sendMessage);
sendButton.disabled = true;
