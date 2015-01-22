function STAR(o){
    o.format = function (func){
        return func(o.situation,
                    o.task,
                    o.action,
                    o.results);
    };
    o.st_a_r = function(description){
        description.push(o.situation + o.task, o.action, o.results);
    };
    o.st_ar = function(description){
        description.push(o.situation + o.task, o.action + o.results);
    };
    o.star = function(description){
        description.push(o.situation + o.task + o.action + o.results);
    };
    o.extend_description = function(description){
        return o[o.method](description)
    };
    return o;
}

function mk_description(stars, extra){
    var description = [];

    stars.forEach(function(star_o){
        var star = new STAR(star_o);
        star.extend_description(description);
    });

    description.push.apply(description, extra);
    return description;
}

function roles(){
    var r = {
            yoyo: {
                id: "yoyo",
                company: "JustYoyo Ltd",
                title: "Senior QA Engineer",
                start: "06/2014",
                end: "11/2014",
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
                skills: [
                    "BDD",
                    "Kanban",
                    "DevOps",
                    "Deployment"
                ],
                technologies: [
                    "Python",
                    "Selenium",
                    "Saucelabs",
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
                skills: [
                    "Test automation",
                    "Scrum",
                    "DevOps"
                ],
                technologies: [
                    "Python",
                    "C# (Mono/Unity)",
                    "Jython",
                    "REST",
                    "Teamcity",
                    "Eggplant",
                    "Sikuli",
                    "Selenium",
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

    r.yoyo.description = mk_description([
        {
            situation:  "As a new company JustYoyo had not yet introduced QA. ",
            task:       "I needed to insert quality into the development and release processes in order to increase both internal and external confidence in the product. ",
            action:     "To achieve this I introduced an issue tracking system, used this to introduce quality gates before and after development personal_statement, then automated a proportion of the test suite against the product's REST server. ",
            results:    "The improved specifications received by the developers meant that the right work was carried out with fewer corrections while the new test process caught a number of issues that otherwise may have been released. ",
            method:     "star"

        },
        {
            situation:  "During the run-up to a major release ",
            task:       "there was not enough back-end resource to meet the schedule. ",
            action:     "To remedy this I worked a split role between testing and development, in which I developed a django micro-service which delivered GCM and APNS push notifications. ",
            results:    "In doing this I familiarised myself with the back-end architecture, and was able to assess the unit testing practices that were in use. This lead to a more detailed understanding of the system as a whole, feeding back into my test strategy.",
            method:     "star"
        },
        {
            situation:  "There was nothing in place for continual process improvement; ",
            task:       "I felt that sequential improvements to the development process would feed into better quality and a faster turn-around of deliverables. ",
            action:     "To achieve this I introduced and chaired fortnightly retrospective meetings. ",
            results:    "Improving the level of communication within the team also changed way we communicated across the company while leading me to refine the process and training around issue tracking. ",
            method:     "star"

        }
    ]);
    r.mc_aut.description = mk_description([
        {
            situation:  "As a progression of my earlier role I moved to the Tools Team. ",
            task:       "My task was to integrate quality into the tools development process and improve efficiency by streamlining manual tasks. ",
            action:     "I introduced BDD to the tools team, and introduced new background services to integrate first and third party tools. ",
            results:    "This reduced workload, removed manual steps and shortened iteration times.",
            method:     "star"
        },
        {
            situation:  "In order to ensure productivity the tools team wanted system-level tests for their web applications. ",
            task:       "To efficiently support the target range of browser environments there needed to be a way of developing tests locally, then with a simple configuration change, deploying them across a number of remote webdriver configurations. ",
            action:     "For this I developed a new test framework: <a href='https://pypi.python.org/pypi/Fattoush'>Fattoush</a>. ",
            results:    "This reduced the amount of work required to produce and configure new tests, as well as making test deployment more reliable.",
            method:     "star"
        }
    ]);
    r.mc_qa.description = mk_description([
        {
            situation:  "Mind Candy wished to automate a proportion of the Moshi Monsters regression pack. ",
            task:       "Initially my task was to manage contractors in doing this, however the work produced was not maintainable, so the contractors were released and I performed the work myself. ",
            action:     "I started using Eggplant, however this turned out not to be suitable for the dynamic nature of the product, therefore I put together a business case for a system which used Sikuli and Selenium in place of Eggplant, and a custom tool for intercepting traffic between the web front end and the back end. ",
            results:    "Once this was implemented the tests were more stable and easier to maintain.",
            method:     "star"
        },
        {
            situation:  "After seeing the results of the work on Moshi Monsters, Mind Candy wanted some automated tests for Moshling Rescue. ",
            task:       "I was to write UI tests for the Unity app which would play every level in the game. ",
            action:     "For this I developed two systems of which one was chosen by the development team. ",
            results:    "The tests written within this system were integrated with the CI server, providing continuous testing on commit.",
            method:     "star"
        }
    ]);
    r.it2.description = mk_description([], [
                    "My base role involved writing and executing test cases and strategies for testing new features or adopting new technologies.",
                    "My ability to automate long and error-prone manual processes quickly saw my role expand to include scripting and test automation. I was asked to write tools which others around the business could use. I was tasked with the maintenance of a legacy automation suite, extending it to gather performance data, and then converting some manual test scripts to CodedUI tests.",
                    "For this role I learned MS SQL Server, VSS, TFS, C#, and a host of related technologies, as well as frequently putting myself forward for projects where I could apply and expand my knowledge and skills."
                ]);
    r.ibm.description = mk_description([], [
                    "In this role I was tasked with developing an automated testing project from a broadly defined specification which gave scope to shape the project. The tests were for a network monitoring product using a number of technologies I had never used before including Python, XML, STAF/STAX, bash and Rational Clearcase. At the end of my placement I then trained a new industrial trainee to continue the work. My placement exceeded the course requirements expected under the SFIA scheme."
                ]);

    return r;
}

angular.module('angularCV', [])
    .directive('ngBindHtmlUnsafe', ['$sce', function($sce){
        //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
        return {
            scope: {
                ngBindHtmlUnsafe: '='
            },
            template: "<p ng-bind-html='trustedHtml'></p>",
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
    }])
    .controller('cvController', function($scope){

        $scope.opening_statement =[
            "I am a passionate, hard-working, highly motivated individual. I am enthusiastic about developing innovative, high-quality software, which has been driven in part by my love of computer games. I graduated from one of the top computer science departments in the country and have spent 6 years expanding my technical skills and experience. I have zeal, commitment and ambition which I am looking to bring to and develop within an exciting new role."
        ];
        $scope.personal_statement = [
            "<span class=\"games\">From an early age I have wanted to make games. </span>At the age of 11 I bought a simple WYSIWYG program for designing computer games. This lead on to learning various dialects of BASIC, even writing a simple blackjack game on my A level graphical calculator. I have continued to pursue a love, both of playing and making games. Recent projects have included ASCII Boggle and tic-tac-toe games developed as part of a team at London Python Dojo events. In addition to team projects I also develop solo projects, including recently a personal website<span class=\"games\"> including interactive content</span>.",
            "In my professional life I am passionate about making high quality software. My roles have helped me appreciate that you need to work on quality at every point in the lifecycle of a project, and that high quality tools can not only save effort but enable developers and artists to spend more of their time focused on high quality content, rather than the machinery of integrating their work into the project. I have spent 6 years cultivating excellent professional skills in writing tests and software as well as scripting processes, driving process and quality improvement at every opportunity.",
            "As part of the <a href=\"http://ldnpydojo.org.uk/\">London Python Dojo</a> team I get the opportunity to try out new skills and knowledge. In return I get to help less experienced python developers, encourage best practices such as TDD, and build relationships within the python community. My involvement in the python community exemplifies my approach to creating software in a collaborative, encouraging and open environment.",
            //"While the London Python Dojo gives me opportunities to use new approaches to technologies, my membership of the BCS allows me to explore these in greater depth. Combining breadth and depth in my understanding of technologies and approaches drives flexibility and creativity in my professional life.",
            "Getting involved in hack days, game jams or board game clubs has helped me to create collaborative communities of co-workers. In my experience to date I have always thrived in companies with this kind of culture, where strong working relationships help to drive productivity.",
            "I am looking for a workplace in which I am a member of a creative, innovative, collaborative team in which I can work with my colleagues to craft a high quality product we all believe in."
        ];

        $scope.roles = roles();
        $scope.role_order = [
            "yoyo",
            "mc_aut",
            "mc_qa",
            "it2",
            "ibm"
        ];


        $scope.professional_activities = [
            {
                title: "London Python Dojo",
                description: "Event organiser, speaker, cat herder. Working with PyLadies to increase event diversity."
            },
            {
                title: "BCS Professional Member",
                description: "Qualified up to ISEB Intermediate Certification for Software Testing"
            }
        ];

        $scope.qualifications = [
            {
                title: "University of York",
                description: "BSc (Hons) in Computer Science and Mathematics with Industrial Placement"
            }
        ];
    });