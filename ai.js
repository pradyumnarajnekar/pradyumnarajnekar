/* =========================================================
   PORTFOLIO AI ASSISTANT
   File: ai.js

   Chatbot name: Mark 1

   This chatbot reads portfolio information directly from
   elements in index.html using their IDs.

   No API key.
   No separate knowledge file.
   ========================================================= */


   document.addEventListener("DOMContentLoaded", () => {


    /* =========================================================
       1. READ INFORMATION DIRECTLY FROM index.html
       ========================================================= */
  
    function read(id) {
  
      const element =
        document.getElementById(id);
  
  
      if (!element) {
        return "";
      }
  
  
      return element.textContent
        .replace(/\s+/g, " ")
        .trim();
  
    }
  
  
  
    /* =========================================================
       2. COLLECT PORTFOLIO INFORMATION
       ========================================================= */
  
    function getPortfolioData() {
  
      return {
  
        /* ---------- BASIC INFORMATION ---------- */
  
        name:
          read("my-name"),
  
        role:
          read("developer-role"),
  
        greeting:
          read("greeting"),
  
        aboutHeading:
          read("about-heading"),
  
  
  
        /* ---------- CURRENT WORK ---------- */
  
        currentWork: {
  
          title:
            read("current-work-title"),
  
          secondaryTitle:
            read("current-work-secondary-title"),
  
          company:
            read("current-work-company")
  
        },
  
  
  
        /* ---------- EDUCATION CARD ---------- */
  
        educationCard: {
  
          degree:
            read("education-card-degree"),
  
          level:
            read("education-card-level"),
  
          university:
            read("education-card-university")
  
        },
  
  
  
        /* ---------- SKILLS CARD ---------- */
  
        skillsCard: {
  
          skills:
            read("me-skills")
  
        },
  
  
  
        /* ---------- PROJECT CARD ---------- */
  
        projectCard: {
  
          project:
            read("featured-project")
  
        },
  
  
  
        /* ---------- EXPERIENCE ---------- */
  
        experience: {
  
          tcs: {
  
            date:
              read("tcs-date"),
  
            role:
              read("tcs-role"),
  
            company:
              read("tcs-company"),
  
            description:
              read("tcs-description")
  
          },
  
  
          americanChase: {
  
            date:
              read("american-chase-date"),
  
            role:
              read("american-chase-role"),
  
            company:
              read("american-chase-company"),
  
            description:
              read("american-chase-description")
  
          }
  
        },
  
  
  
        /* ---------- EDUCATION ---------- */
  
        education: {
  
          college: {
  
            batch:
              read("college-batch"),
  
            degree:
              read("college-degree"),
  
            university:
              read("college-university"),
  
            description:
              read("college-description")
  
          },
  
  
          school: {
  
            batch:
              read("school-batch"),
  
            grade:
              read("school-grade"),
  
            name:
              read("school-name"),
  
            description:
              read("school-description")
  
          }
  
        },
  
  
  
        /* ---------- SKILLS ---------- */
  
        skills: {
  
          languages: [
  
            read("python"),
            read("java"),
            read("cpp"),
            read("sql")
  
          ],
  
  
          technologies: [
  
            read("front-end-development"),
            read("ai-ml"),
            read("devops")
  
          ],
  
  
          tools: [
  
            read("git"),
            read("github"),
            read("vs-code"),
            read("aws"),
            read("azure-devops")
  
          ],
  
  
          frameworks: [
  
            read("angular"),
            read("html"),
            read("css")
  
          ]
  
        },
  
  
  
        /* ---------- PROJECTS ---------- */
  
        projects: {
  
          vrikshnetra: {
  
            name:
              read("vrikshnetra"),
  
            description:
              read("vrikshnetra-description"),
  
            technologies: [
  
              read("vrikshnetra-python"),
              read("vrikshnetra-html"),
              read("vrikshnetra-css")
  
            ]
  
          },
  
  
          laptopPricePredictor: {
  
            name:
              read("laptop-price-predictor"),
  
            description:
              read("laptop-price-predictor-description"),
  
            technologies: [
  
              read("laptop-python"),
              read("streamlit")
  
            ]
  
          },
  
  
          dineIn: {
  
            name:
              read("dine-in"),
  
            description:
              read("dine-in-description"),
  
            technologies: [
  
              read("backend"),
              read("database"),
              read("html-css-js")
  
            ]
  
          }
  
        },
  
  
  
        /* ---------- CONTACT ---------- */
  
        contact: {
  
          email:
            read("email"),
  
          linkedin:
            read("linkedin-handle"),
  
          github:
            read("github-handle"),
  
          resume:
            read("resume-text")
  
        },
  
  
  
        /* ---------- MUSIC ---------- */
  
        music: {
  
          title:
            read("music-title"),
  
          description:
            read("music-label")
  
        }
  
      };
  
    }
  
  
  
    /* =========================================================
       3. GET CHATBOT ELEMENTS
       ========================================================= */
  
    const toggleButton =
      document.getElementById("ai-chat-toggle");
  
  
    const chatPanel =
      document.getElementById("ai-chat-panel");
  
  
    const closeButton =
      document.getElementById("ai-chat-close");
  
  
    const messagesContainer =
      document.getElementById("ai-chat-messages");
  
  
    const input =
      document.getElementById("ai-chat-input");
  
  
    const sendButton =
      document.getElementById("ai-chat-send");
  
  
    const quickQuestions =
      document.querySelectorAll(".ai-chat-quick");
  
  
  
    /* =========================================================
       4. SAFETY CHECK
       ========================================================= */
  
    if (
      !toggleButton ||
      !chatPanel ||
      !closeButton ||
      !messagesContainer ||
      !input ||
      !sendButton
    ) {
  
      console.warn(
        "Mark 1: chatbot UI elements not found."
      );
  
      return;
  
    }
  
  
  
    /* =========================================================
       5. OPEN / CLOSE CHAT
       ========================================================= */
  
    function openChat() {
  
      chatPanel.classList.add("open");
  
  
      setTimeout(() => {
  
        input.focus();
  
      }, 100);
  
    }
  
  
  
    function closeChat() {
  
      chatPanel.classList.remove("open");
  
    }
  
  
  
    toggleButton.addEventListener(
      "click",
      () => {
  
        if (
          chatPanel.classList.contains("open")
        ) {
  
          closeChat();
  
        } else {
  
          openChat();
  
        }
  
      }
    );
  
  
  
    closeButton.addEventListener(
      "click",
      closeChat
    );
  
  
  
    /* =========================================================
       6. ADD MESSAGE TO CHAT
       ========================================================= */
  
    function addMessage(
      text,
      sender = "bot"
    ) {
  
      const message =
        document.createElement("div");
  
  
      message.className =
        sender === "user"
          ? "ai-message ai-message-user"
          : "ai-message ai-message-bot";
  
  
      const bubble =
        document.createElement("div");
  
  
      bubble.className =
        "ai-message-bubble";
  
  
      bubble.textContent =
        text;
  
  
      message.appendChild(
        bubble
      );
  
  
      messagesContainer.appendChild(
        message
      );
  
  
      messagesContainer.scrollTop =
        messagesContainer.scrollHeight;
  
    }
  
  
  
    /* =========================================================
       7. TYPING INDICATOR
       ========================================================= */
  
    function showTyping() {
  
      const typing =
        document.createElement("div");
  
  
      typing.className =
        "ai-message ai-message-bot ai-typing-message";
  
  
      typing.id =
        "ai-typing-indicator";
  
  
      const bubble =
        document.createElement("div");
  
  
      bubble.className =
        "ai-message-bubble ai-typing";
  
  
      bubble.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
      `;
  
  
      typing.appendChild(
        bubble
      );
  
  
      messagesContainer.appendChild(
        typing
      );
  
  
      messagesContainer.scrollTop =
        messagesContainer.scrollHeight;
  
    }
  
  
  
    function hideTyping() {
  
      const typing =
        document.getElementById(
          "ai-typing-indicator"
        );
  
  
      if (typing) {
  
        typing.remove();
  
      }
  
    }
  
  
  
    /* =========================================================
       8. TEXT HELPERS
       ========================================================= */
  
    function lower(text) {
  
      return text
        .toLowerCase()
        .trim();
  
    }
  
  
  
    /*
      Checks whether the question contains at least
      one phrase from the supplied list.
    */
  
    function containsAny(
      text,
      phrases
    ) {
  
      return phrases.some(
        phrase =>
          text.includes(
            phrase.toLowerCase()
          )
      );
  
    }
  
  
  
    /*
      Checks whether the question contains
      all supplied phrases.
    */
  
    function containsAll(
      text,
      phrases
    ) {
  
      return phrases.every(
        phrase =>
          text.includes(
            phrase.toLowerCase()
          )
      );
  
    }
  
  
  
    function joinAvailable(
      items
    ) {
  
      return items
        .filter(Boolean)
        .join(", ");
  
    }
  
  
  
    /*
      Removes common punctuation so questions like:
  
      "Where do I study?"
      "Where do I study"
      "where do i study!"
  
      are treated the same way.
    */
  
    function cleanQuestion(text) {
  
      return text
        .toLowerCase()
        .replace(/[?!.,;:'"`]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
  
    }
  
  
  
    /* =========================================================
       9. RESPONSE ENGINE
       ========================================================= */
  
    function generateResponse(
      question
    ) {
  
      const q =
        cleanQuestion(question);
  
  
      const data =
        getPortfolioData();
  
  
  
      /* =====================================================
         GREETINGS
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "hello",
          "hi",
          "hey",
          "hii",
          "good morning",
          "good evening",
          "good afternoon"
  
        ])
      ) {
  
        return `Hei I'm Mark 1, Pradyumna's ai. You can ask me about his work, experience, education, skills, projects, or how to contact him.`;
  
      }
  
  
  
      /* =====================================================
         WHO ARE YOU / ASSISTANT
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "who are you",
          "what are you",
          "your name",
          "what can you do",
          "what is your name"
  
        ])
      ) {
  
        return `I'm Mark 1, the ai assistant for ${data.name}. I can answer questions about his work, experience, education, skills, projects, and contact information using the information available on this website.`;
  
      }
  
  
  
      /* =====================================================
         ABOUT PRADYUMNA
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "about him",
          "about pradyumna",
          "who is pradyumna",
          "tell me about pradyumna",
          "tell me about him",
          "who is he",
          "tell me about yourself",
          "tell me about pradyumna rajnekar"
  
        ])
      ) {
  
        return `${data.name} is a ${data.role}. I can tell you about his professional experience, education, technical skills, and projects.`;
  
      }
  
  
  
      /* =====================================================
         RESIDENTIAL LOCATION / WHERE HE STAYS
  
         IMPORTANT:
         Pune is a WORK location in the portfolio.
         It must NOT be treated as his residential location.
  
         Since the portfolio does not contain a residential
         address/location, Mark 1 explicitly says so.
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "where do i stay",
          "where does he stay",
          "where do you stay",
          "where are you staying",
          "where is he staying",
          "where does pradyumna stay",
          "where does pradyumna live",
          "where does he live",
          "where do i live",
          "where are you from",
          "where is he from",
          "hometown",
          "home town",
          "residence",
          "residential location",
          "home location",
          "personal address",
          "home address"
  
        ])
      ) {
  
        return `I don't have ${data.name}'s residential location or home address. I only know the locations explicitly mentioned for his education and work.`;
  
      }
  
  
  
      /* =====================================================
         CURRENT WORK / WHERE DOES HE WORK
  
         This block now understands:
  
         where do i work
         where does he work
         where are you working
         where is your office
         where is your workplace
         which company do you work for
         etc.
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "where do i work",
          "where does he work",
          "where do you work",
          "where are you working",
          "where is he working",
          "where is your workplace",
          "where is his workplace",
          "where is your office",
          "where is his office",
          "which company do you work for",
          "which company does he work for",
          "what company do you work for",
          "what company does he work for",
          "who do you work for",
          "who does he work for",
          "where is he employed",
          "where are you employed",
          "current work",
          "currently working",
          "current job",
          "what does he do now",
          "what do you do now",
          "present job",
          "present work"
  
        ])
      ) {
  
        return `He currently works as ${data.experience.tcs.role} at ${data.experience.tcs.company}, Pune. His current experience includes AWS, Azure DevOps and IBM MQ.`;
  
      }
  
  
  
      /* =====================================================
         WORK LOCATION / PUNE
  
         This catches questions such as:
  
         where does he work in pune
         where is he working in pune
         does he work in pune
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "work in pune",
          "working in pune",
          "job in pune",
          "office in pune",
          "works in pune",
          "workplace in pune",
          "company in pune"
  
        ])
      ) {
  
        return `Yes. He has been in Pune since ${data.experience.tcs.company}, as his current workplace. He works there as a ${data.experience.tcs.role}.`;
  
      }
  
  
  
      /* =====================================================
         TCS
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "tcs",
          "tata consultancy"
  
        ])
      ) {
  
        return `${data.experience.tcs.company}. Role: ${data.experience.tcs.role}. Period: ${data.experience.tcs.date}. ${data.experience.tcs.description}`;
  
      }
  
  
  
      /* =====================================================
         AMERICAN CHASE
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "american chase",
          "chase",
          "previous job",
          "previous work",
          "past job",
          "previous company"
  
        ])
      ) {
  
        return `${data.experience.americanChase.company}. Role: ${data.experience.americanChase.role}. Period: ${data.experience.americanChase.date}. ${data.experience.americanChase.description}`;
  
      }
  
  
  
      /* =====================================================
         EXPERIENCE
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "experience",
          "work experience",
          "professional experience",
          "career",
          "jobs",
          "companies",
          "work history",
          "career history"
  
        ])
      ) {
  
        return `His professional experience includes ${data.experience.tcs.role} at ${data.experience.tcs.company} (${data.experience.tcs.date}) and ${data.experience.americanChase.role} at ${data.experience.americanChase.company} (${data.experience.americanChase.date}).`;
  
      }
  
  
  
      /* =====================================================
         EDUCATION — NATURAL LANGUAGE
  
         This is the important fix.
  
         These questions all map to education:
  
         where do i study
         where did i study
         where do you study
         where did you go to college
         what college do you attend
         which university
         where is your college
         what did you study
         where did he study
         etc.
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "where do i study",
          "where did i study",
          "where do you study",
          "where did you study",
          "where does he study",
          "where did he study",
          "where is he studying",
          "where are you studying",
          "where is your college",
          "where is his college",
          "where is your university",
          "where is his university",
          "which college",
          "what college",
          "which university",
          "what university",
          "what college did you go to",
          "what college did he go to",
          "where did you go to college",
          "where did he go to college",
          "what university did you attend",
          "what university did he attend",
          "where did you graduate",
          "where did he graduate",
          "what did you study",
          "what did he study",
          "what did you major in",
          "what did he major in",
          "where did you get your degree",
          "where did he get his degree"
  
        ])
      ) {
  
        return `He studied at ${data.education.college.university}. He completed his ${data.education.college.degree}. ${data.education.college.description}.`;
  
      }
  
  
  
      /* =====================================================
         EDUCATION — GENERAL
  
         Kept separately so simple questions like:
  
         education?
         college?
         degree?
         university?
  
         still work.
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "education",
          "degree",
          "college",
          "university",
          "btech",
          "bachelor",
          "graduation",
          "academic background",
          "educational background",
          "qualification",
          "qualifications"
  
        ])
      ) {
  
        return `He completed ${data.education.college.degree} at ${data.education.college.university}. ${data.education.college.description}.`;
  
      }
  
  
  
      /* =====================================================
         SCHOOL
  
         This also handles:
  
         school?
         where did you go to school?
         which school?
         what school?
         12th?
         where did he complete school?
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "school",
          "where did you go to school",
          "where did he go to school",
          "which school",
          "what school",
          "where is your school",
          "where is his school",
          "where did you complete school",
          "where did he complete school",
          "12th",
          "class 12",
          "xii",
          "higher secondary",
          "high school"
  
        ])
      ) {
  
        return `He completed ${data.education.school.grade} at ${data.education.school.name}. ${data.education.school.description}.`;
  
      }
  
  
  
      /* =====================================================
         WHAT DID YOU STUDY / FIELD OF STUDY
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "field of study",
          "field did you study",
          "field did he study",
          "what did you study",
          "what did he study",
          "what is your degree",
          "what is his degree",
          "what is your qualification",
          "what is his qualification",
          "what did you graduate in",
          "what did he graduate in"
  
        ])
      ) {
  
        return `He studied Computer Science and completed ${data.education.college.degree} at ${data.education.college.university}. ${data.education.college.description}.`;
  
      }
  
  
  
      /* =====================================================
         SKILLS — GENERAL
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "skills",
          "skill",
          "tech stack",
          "technical skills",
          "technologies",
          "technology",
          "what does he know",
          "what can he code",
          "what programming languages",
          "programming languages",
          "what technologies does he know"
  
        ])
      ) {
  
        const languages =
          joinAvailable(
            data.skills.languages
          );
  
  
        const technologies =
          joinAvailable(
            data.skills.technologies
          );
  
  
        const tools =
          joinAvailable(
            data.skills.tools
          );
  
  
        const frameworks =
          joinAvailable(
            data.skills.frameworks
          );
  
  
        return `His technical skills include:\n\nLanguages: ${languages}.\n\nTechnologies: ${technologies}.\n\nTools: ${tools}.\n\nFrameworks & Web: ${frameworks}.`;
  
      }
  
  
  
      /* =====================================================
         PYTHON
         ===================================================== */
  
      if (
        q.includes("python")
      ) {
  
        return `${data.name} lists ${read("python")} among his programming languages.`;
  
      }
  
  
  
      /* =====================================================
         JAVA
         ===================================================== */
  
      if (
        q.includes("java")
      ) {
  
        return `${data.name} lists ${read("java")} among his programming languages.`;
  
      }
  
  
  
      /* =====================================================
         C++
         ===================================================== */
  
      if (
        q.includes("c++") ||
        q.includes("cpp")
      ) {
  
        return `${data.name} lists ${read("cpp")} among his programming languages.`;
  
      }
  
  
  
      /* =====================================================
         SQL
         ===================================================== */
  
      if (
        q.includes("sql")
      ) {
  
        return `${data.name} lists ${read("sql")} among his programming languages.`;
  
      }
  
  
  
      /* =====================================================
         AWS
         ===================================================== */
  
      if (
        q.includes("aws")
      ) {
  
        return `AWS is listed among his tools and technologies. His current DevOps experience also includes AWS.`;
  
      }
  
  
  
      /* =====================================================
         AZURE DEVOPS
         ===================================================== */
  
      if (
        q.includes("azure devops") ||
        q.includes("azure")
      ) {
  
        return `Azure DevOps is listed among his tools. His current DevOps experience includes AWS, Azure DevOps and IBM MQ.`;
  
      }
  
  
  
      /* =====================================================
         DEVOPS
         ===================================================== */
  
      if (
        q.includes("devops")
      ) {
  
        return `DevOps is one of his listed technologies, and he currently works as a ${data.experience.tcs.role}. His current experience includes AWS, Azure DevOps and IBM MQ.`;
  
      }
  
  
  
      /* =====================================================
         AI / ML
         ===================================================== */
  
      if (
        q.includes("artificial intelligence") ||
        q.includes("machine learning") ||
        q.includes("ai/ml") ||
        q.includes("ai ml") ||
        q === "ai" ||
        q === "ml"
      ) {
  
        return `AI / ML is one of his listed technologies. His projects also include AI/ML-based work such as ${data.projects.vrikshnetra.name} and ${data.projects.laptopPricePredictor.name}.`;
  
      }
  
  
  
      /* =====================================================
         PROJECTS — GENERAL
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "projects",
          "project",
          "what has he built",
          "what did he build",
          "things he built",
          "what have you built",
          "what did you build",
          "what have you made",
          "what did you make",
          "what has he made"
  
        ])
      ) {
  
        return `His projects include ${data.projects.vrikshnetra.name}, ${data.projects.laptopPricePredictor.name}, and ${data.projects.dineIn.name}.`;
  
      }
  
  
  
      /* =====================================================
         VRIKSHNETRA
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "vrikshnetra",
          "plant specie",
          "plant identification",
          "plant species",
          "leaf image"
  
        ])
      ) {
  
        return `${data.projects.vrikshnetra.name}: ${data.projects.vrikshnetra.description} Technologies: ${joinAvailable(data.projects.vrikshnetra.technologies)}.`;
  
      }
  
  
  
      /* =====================================================
         LAPTOP PRICE PREDICTOR
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "laptop price",
          "laptop predictor",
          "price predictor",
          "laptop project"
  
        ])
      ) {
  
        return `${data.projects.laptopPricePredictor.name}: ${data.projects.laptopPricePredictor.description} Technologies: ${joinAvailable(data.projects.laptopPricePredictor.technologies)}.`;
  
      }
  
  
  
      /* =====================================================
         DINE.IN
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "dine.in",
          "dine in",
          "restaurant project",
          "restaurant",
          "cafe project",
          "cafe"
  
        ])
      ) {
  
        return `${data.projects.dineIn.name}: ${data.projects.dineIn.description} Technologies: ${joinAvailable(data.projects.dineIn.technologies)}.`;
  
      }
  
  
  
      /* =====================================================
         CONTACT
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "contact",
          "get in touch",
          "reach him",
          "reach pradyumna",
          "how can i contact",
          "how do i contact",
          "how can i reach",
          "how do i reach"
  
        ])
      ) {
  
        return `You can contact ${data.name} through email at ${data.contact.email}, LinkedIn at ${data.contact.linkedin}, or GitHub at ${data.contact.github}.`;
  
      }
  
  
  
      /* =====================================================
         EMAIL SPECIFIC
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "email address",
          "email id",
          "mail id",
          "email",
          "mail address"
  
        ])
      ) {
  
        return `His email address is ${data.contact.email}.`;
  
      }
  
  
  
      /* =====================================================
         GITHUB SPECIFIC
         ===================================================== */
  
      if (
        q.includes("github")
      ) {
  
        return `His GitHub handle is ${data.contact.github}.`;
  
      }
  
  
  
      /* =====================================================
         LINKEDIN SPECIFIC
         ===================================================== */
  
      if (
        q.includes("linkedin")
      ) {
  
        return `His LinkedIn handle is ${data.contact.linkedin}.`;
  
      }
  
  
  
      /* =====================================================
         RESUME
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "resume",
          "cv",
          "curriculum vitae"
  
        ])
      ) {
  
        return `You can view ${data.name}'s resume at the bottom in the ME section.`;
  
      }
  
  
  
      /* =====================================================
         MUSIC
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "music",
          "does he make music",
          "does pradyumna make music",
          "listen to music",
          "does he create music"
  
        ])
      ) {
  
        return `Yes he does, you can find it in the ME section.`;
  
      }
  
  
  
      /* =====================================================
         TCS DATES
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "when did he join tcs",
          "when did you join tcs",
          "tcs date",
          "tcs joining",
          "when did he start at tcs",
          "when did you start at tcs"
  
        ])
      ) {
  
        return `He joined TCS in ${data.experience.tcs.date}.`;
  
      }
  
  
  
      /* =====================================================
         BATCH / GRADUATION
         ===================================================== */
  
      if (
        containsAny(q, [
  
          "graduated",
          "graduation year",
          "college batch",
          "college year",
          "when did he graduate",
          "when did you graduate"
  
        ])
      ) {
  
        return `His college education is listed as ${data.education.college.batch}. He completed ${data.education.college.degree} at ${data.education.college.university}.`;
  
      }
  
  
  
      /* =====================================================
         FALLBACK
         ===================================================== */
  
      return `I don't have a specific answer for that yet. <Still Learning>. Try asking me about ${data.name}'s work, experience, education, skills, projects, or contact information.`;
  
    }
  
  
  
    /* =========================================================
       10. SEND MESSAGE
       ========================================================= */
  
    async function sendMessage(
      text = null
    ) {
  
      const message =
        text !== null
          ? text.trim()
          : input.value.trim();
  
  
      if (!message) {
        return;
      }
  
  
  
      /* Show user's message */
  
      addMessage(
        message,
        "user"
      );
  
  
  
      /* Clear input */
  
      input.value = "";
  
      input.style.height =
        "auto";
  
  
  
      /* Show typing */
  
      showTyping();
  
  
  
      /* Small natural delay */
  
      await new Promise(
        resolve =>
          setTimeout(
            resolve,
            450
          )
      );
  
  
  
      /* Generate answer */
  
      const response =
        generateResponse(
          message
        );
  
  
  
      /* Remove typing */
  
      hideTyping();
  
  
  
      /* Show answer */
  
      addMessage(
        response,
        "bot"
      );
  
    }
  
  
  
    /* =========================================================
       11. SEND BUTTON
       ========================================================= */
  
    sendButton.addEventListener(
      "click",
      () => {
  
        sendMessage();
  
      }
    );
  
  
  
    /* =========================================================
       12. ENTER KEY
       ========================================================= */
  
    input.addEventListener(
      "keydown",
      event => {
  
        if (
          event.key === "Enter" &&
          !event.shiftKey
        ) {
  
          event.preventDefault();
  
          sendMessage();
  
        }
  
      }
    );
  
  
  
    /* =========================================================
       13. AUTO-GROW TEXTAREA
       ========================================================= */
  
    input.addEventListener(
      "input",
      () => {
  
        input.style.height =
          "auto";
  
  
        input.style.height =
          Math.min(
            input.scrollHeight,
            120
          ) + "px";
  
      }
    );
  
  
  
    /* =========================================================
       14. QUICK QUESTIONS
       ========================================================= */
  
    quickQuestions.forEach(
      button => {
  
        button.addEventListener(
          "click",
          () => {
  
            const question =
              button.textContent.trim();
  
  
            sendMessage(
              question
            );
  
          }
        );
  
      }
    );
  
  
  
    /* =========================================================
       15. ESCAPE TO CLOSE
       ========================================================= */
  
    document.addEventListener(
      "keydown",
      event => {
  
        if (
          event.key === "Escape" &&
          chatPanel.classList.contains("open")
        ) {
  
          closeChat();
  
        }
  
      }
    );
  
  
  
    /* =========================================================
       16. INITIAL GREETING
       ========================================================= */
  
    addMessage(
      `Hei I'm Mark 1, Pradyumna's ai. Ask me anything about his work, skills, experience, education, or projects.`
    );
  
  
  });
