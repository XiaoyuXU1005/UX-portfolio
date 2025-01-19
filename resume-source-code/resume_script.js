$(document).ready(function () {
    
    var initDot = document.getElementById("loading");
    var loading = setInterval(function () {
      if (initDot.innerHTML.length === 5) {
        initDot.innerHTML = "";
      } else {
        initDot.innerHTML += ".";
      }
    }, 600);
  
   
    $("#greeting").text("XIAOYU XU");

    // ====== info ======
    $("#email").text("Email: xuxy2002@outlook.com");
    $("#address").text("Address: Brantford, Ontario, Canada");
    $("#occupation").text("Occupation: UX Designer & Developer");

    // ====== Education ======
    $("#education").html('EDUCATION');

    // Master
    $("#master-degree").html('<i class="fa-brands fa-canadian-maple-leaf fa-rotate-by" style="color: #F2A900; --fa-rotate-angle: 45deg; font-size: 30px;"></i> Wilfrid Laurier University, Master of Science in User Experience Design &nbsp(Brantford, 2024~Present)');
    $("#master-courses-title").on("click", function () {
      $("#master-courses-list").slideToggle();
    });
  
    // Bachelor
    $("#bachelor-degree").html('<i class="fa-solid fa-dove fa-flip-horizontal" style="color: #ED1B2F; font-size: 28px;"></i> McGill University, Bachelor of Science in Computer Science &nbsp(Montreal, 2020~2024)');
    $("#bachelor-courses-title").on("click", function () {
      $("#bachelor-courses-list").slideToggle();
    });
  
    // High School
    $("#high-school").html('<i class="fa-solid fa-dog" style="color: #7a7a7a; font-size: 27px;"></i> Point Grey Secondary School, High School Diploma &nbsp(Vancouver, 2016~2020)');

    // ====== Experience ======
    $("#experience").html('EXPERIENCE');

    // bank
    $("#bank").html('<i class="fa-solid fa-building-columns" style="color: #ff0000; font-size: 25px;"></i> China Merchants Bank, Internship in Customer Service &nbsp(Tangshan City, July 2023)');
    $("#bank-role").html(`
      <ul>
        <liSupported customers with financial transactions and online banking.</li>
        <li>Assisted customers applying debit and credit cards, ensuring a smooth and efficient experience.</li>
        <li>Promoted banking service within the community, contributing to the bank's outreach.</li>
        <li>Promoted financial products, identifying and capitalizing on corss-selling opportunities.</li>
      </ul>
    `);

    // restaurant
    $("#restaurant").html('<i class="fa-solid fa-utensils" style="color: #ffcc00; font-size: 25px;"></i> Jumbo Dragon, Cashier and Server &nbsp(Brantford, Oct 2024~Jan 2025)');
    $("#restaurant-role").html(`
      <ul>
        <li>Processing customer orders and payments.</li>
        <li>Ensuring excellent customer service during peak hours.</li>
        <li>Maintaining cleanliness and order in the dining area.</li>
      </ul>
    `);

    // ====== Projects ======
    $("#projects").html('PROJECTS');

    $("#project1").html('<i class="fa-solid fa-heart" style="color: #00a3d7;font-size: 25px;"></i> Heartmony - the haptic device to help people with hard of hearing to feel music &nbsp(Wilfrid Laurier University, Fall 2024)');
    $("#project1-desc").html(`
      <ul>
        <li>Designed, built, and refined the product to meet client's goals.</li>
        <li>Selected and tested materials, built and evaluated prototypes for optimal performance.</li>
        <li>Worked with a team of four to ensure effective communication and coordination.</li>
      </ul>
    `);

    $("#project2").html('<i class="fa-solid fa-earth-americas" style="color: #79bd9a;font-size: 25px;"></i> PlanPal - an innovative website to help users better plan and book their trip &nbsp(Wilfrid Laurier University, Fall 2024)');
    $("#project2-desc").html(`
      <ul>
        <li>Designed and developed core product features, including the trip-planning interface using Figma, ensuring a seamless and user-friendly experience.</li>
        <li>Created surveys and conducted user interviews to identify key product features and recommend improvements based on feedback.</li>
        <li>Collaborated with a team of five members, fostering effective communication and coordination to achieve project goals.</li>
      </ul>
    `);
    
    $("#project3").html('<i class="fa-solid fa-venus-double" style="color: #bc5d7b;font-size: 25px;"></i> Orchid - a private and safe dating space for women belonging to the LGBTQ+ community &nbsp(Independent Project, Fall 2024)');
    $("#project3-desc").html(`
      <ul>
        <li>Proposed, designed, and developed an innovative dating app catering to Chinese sexual minority women.</li>
        <li>Conducted market analysis to identify gaps, define target audience pain points, and propose tailored solutions.</li>
        <li>Designed surveys, collecting 90 responses, and conducted user interviews with 7 participants to gather insights and validate concepts.</li>
        <li>Created low- and mid-fidelity prototypes to refine the app, incorporating user feedback.</li>
        <li>Currently advancing high-fidelity prototyping and feature development.</li>
      </ul>
    `);

    // ====== Research ======
    $("#research").html('RESEARCH');
    $("#research1").html('<i class="fa-brands fa-twitter" style="color: #74C0FC;font-size: 25px;"></i> Bot or Not, Bot developer &nbsp(McGill University, Jan 2024~May 2024)');
    $("#research1-desc").html(`
      <ul>
        <li>Designed a sophisticated bot in twitter, effectively evading bot detectors.</li>
        <li>Conducted extensive testing and analysis to optimize the bot's performance and mimic human interactions.</li>
        <li>Conducted an in-depth study on the application of AI in social media, especially ChatGPT as a language model, identifying the strength and limitations.</li>
        <li>Utilized machine learning techniques to analyze a dataset of twitter users, developing a model to generate realistic user metadata.</li>
      </ul>
    `);
});
