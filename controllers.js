var app = angular.module('angularCV', []);

app.directive('ngBindHtmlUnsafe', ['$sce', function($sce){
    //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
    return {
        scope: {
            ngBindHtmlUnsafe: '='
        },
        template: "<div ng-bind-html='trustedHtml'></div>",
        link: function($scope, iElm, iAttrs, controller) {
            $scope.updateView = function() {
                $scope.trustedHtml = $sce.trustAsHtml($scope.ngBindHtmlUnsafe);
            };

            //noinspection JSUnusedLocalSymbols
            $scope.$watch('ngBindHtmlUnsafe', function(newVal, oldVal) {
                $scope.updateView(newVal);
            });
        }
    };
}]);

app.controller('cvController', ["$scope", "$sce", function($scope, $sce){

    $scope.unescaped = function(fragment){
        return $sce.trustAsHtml(fragment);
    };

    $scope.opening_statement =[
        "I am a passionate, hard-working, highly motivated individual. I am passionate about developing innovative, high-quality software, which has been driven in part by my love of computer games. I graduated from one of the top computer science departments in the country and have spent 6 years expanding my technical skills and experience. I have passion, commitment and ambition which I am looking to bring to and develop within an exciting new role."
    ];

    $scope.roles = {
        yoyo: {
            id: "yoyo",
            company: "JustYoyo Ltd",
            title: "Senior QA Engineer",
            start: "06/2014",
            end: "11/2014",
            description: [
                "I introduced a formal QA process, including implementing an issue tracker to hold the product backlog as well as test cases, bugs and requests. I used this to create a workflow in which all features were reviewed before they were broken down into stories with input from the developers, to ensure more certainty as to what the product owners wished the developers to implement, reducing the frequent wish to change stories which were already in progress.",
                "In addition, I designed deployment gateways which mandated levels of testing, including the use of automation, in order to reduce the frequency with which app builds with large-scale compatibility issues would be released to the public.",
                "I implemented fortnightly retrospective meetings, promoted Kanban practices and drove process improvement as part of increasing product quality.",
                "I developed the back-end component for a device push service. In doing this I familiarised myself with the back-end architecture, and was able to assess the unit testing practices that were in use. This enabled me to advise on better unit testing practices and gave me insight in to which areas of the system might benefit from extra testing."],
            skills: [
                "Process Improvement",
                "Project Management",
                "QA",
                "Test Automation",
                "Back-end development",
                "Kanban"
            ],
            technologies: [
                "TargetProcess",
                "Appium",
                "UIAutomation",
                "Django",
                "REST",
                "Javascript",
                "Python"
            ]
        },
        mc_aut: {
            id: "mc-aut",
            company: "Mind Candy Ltd",
            title: "Automation Engineer",
            start: "12/2013",
            end: "04/2014",
            description: [
                "As a progression of my role I moved to the Tools team to encompass other automation such as improvements to our continuous integration process. In this role I introduced BDD to the tools team, and introduced new background services to integrate different first and third party tools. This reduced workload, removed manual steps and shortened iteration times around the company.",
                "Part of this role involved creating and contributing to open source frameworks. One of these, Fattoush, I designed and created to ease development workflows around multi-browser testing."
            ],
            skills: [
                "BDD",
                "Kanban",
                "DevOps",
                "Configuration Management"
            ],
            technologies: [
                "Python",
                "REST",
                "Puppet",
                "Vagrant",
                "Teamcity",
                "Gitlab",
                "Git"
            ]
        },
        mc_qa: {
            id: "mc-qa",
            company: "Mind Candy Ltd",
            title: "QA Automation Engineer",
            start: "10/2011",
            end: "12/2013",
            description: [
                "This role included sole responsibility for Test Automation at Mind Candy. Initially this involved managing contractors but I took over the work to improve standards. I put together a business case for a system which used Sikuli and Selenium in place of Eggplant, and a custom tool for intercepting traffic between the web front end and the back end. This resulted in more stable tests.",
                "I also spent time developing tests for Unity which could run on-device. For this I developed two systems: One which ran entirely within the game, and the other which used an external server interacting with the tests."
            ],
            skills: [
                "Test automation",
                "Scrum",
                "DevOps"
            ],
            technologies: [
                "Python",
                "C# (Mono/Unity)",
                "REST",
                "Teamcity",
                "Eggplant",
                "Svn",
                "Git"
            ]
        },
        it2: {
            id: "it2",
            company: "IT2 Treasury Solutions",
            title: "Product Quality Consultant",
            start: "07/2009",
            end: "10/2011",
            description: [
                "My base role involved writing and executing test cases and strategies for testing new features or adopting new technologies.",
                "My ability to automate long and error-prone manual processes quickly saw my role expand to include scripting and test automation. I was asked to write tools which others around the business could use. I was tasked with the maintenance of a legacy automation suite, extending it to gather performance data, and then converting some manual test scripts to CodedUI tests.",
                "For this role I learned MS SQL Server, VSS, TFS, C#, and a host of related technologies, as well as frequently putting myself forward for projects where I could apply and expand my knowledge and skills."
            ],
            skills: [
                "Manual Testing",
                "QA",
                "Tools development",
                "Test automation"
            ],
            technologies: [
                "Python",
                "C# (.Net/CodedUI)",
                "SQL Server",
                "VSS",
                "TFS"
            ]
        },
        ibm: {
            id: "ibm",
            company: "IBM UK Ltd",
            title: "Industrial Trainee (Degree Accredited Placement)",
            start: "07/2007",
            end: "06/2008",
            description: [
                "In this role I was tasked with developing an automated testing project from a broadly defined specification which gave scope to shape the project. The tests were for a network monitoring product using a number of technologies I had never used before including Python, XML, STAF/STAX, bash and Rational Clearcase. At the end of my placement I then trained a new industrial trainee to continue the work. My placement exceeded the course requirements expected under the SFIA scheme."
            ],
            skills: [
                "Manual Testing",
                "Tools development",
                "Test automation"
            ],
            technologies: [
                "Python",
                "Jython",
                "XML",
                "Clearcase"
            ]
        }
};
    $scope.role_order = [
        "yoyo",
        "mc_aut",
        "mc_qa",
        "it2",
        "ibm"
    ];

    $scope.activities = [
        "From an early age I have wanted to make games. At the age of 11 I bought a simple WYSIWYG program for designing computer games. This lead on to learning various dialects of BASIC, even writing a simple blackjack game on my A level graphical calculator. I have continued to pursue a love, both of playing and making games. Recent projects have included ASCII Boggle and tic-tac-toe games developed as part of a team at London Python Dojo events. In addition to team projects I also develop solo projects, including recently an Android Tetris app.",
        "In my professional life I am passionate about making high quality software. My roles have helped me appreciate that you need to work on quality at every point in the lifecycle of a project, and that high quality tools can not only save effort but enable developers and artists to spend more of their time focused on high quality content, rather than the machinery of integrating their work into the project. I have spent 6 years cultivating excellent professional skills in writing tests and software as well as scripting processes, driving process and quality improvement at every opportunity.",
        "As part of the <a href=\"http://ldnpydojo.org.uk/\">London Python Dojo</a> team I get the opportunity to try out new skills and knowledge. In return I get to help less experienced python developers, and encourage best practices such as TDD, as well as growing close ties with other members of the python community. My involvement in the python community exemplifies my approach to creating software in a collaborative, encouraging and open environment.",
        "While the London Python Dojo gives me opportunities to use new approaches to technologies, my membership of the BCS allows me to explore these in greater depth. Combining breadth and depth in my understanding of technologies and approaches drives flexibility and creativity in my professional life.",
        "Getting involved in hack days, game jams or board game clubs has helped to create collaborative communities of co-workers. In my experience to date I have always thrived in companies with this kind of culture, where strong working relationships help to drive productivity.",
        "I am looking for a workplace in which I am a member of a creative, innovative, collaborative team in which I can work with my colleagues to build a product which we all believe in. I hope to work in this type of open and engaged environment crafting high quality software as part of a highly productive team."
    ];

    $scope.qualifications = [
        {
            title: "London Python Dojo",
            description: "Event organiser, speaker, cat herder. Working with PyLadies to increase event diversity."
        },
        {
            title: "BCS Professional Member",
            description: "Qualified up to ISEB Intermediate Certification for Software Testing"
        },
        {
            title: "University of York",
            description: "BSc (Hons) in Computer Science and Mathematics with Industrial Placement"
        }
    ];

}]);