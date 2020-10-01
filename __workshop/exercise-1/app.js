// Preset values
const FROGS = 3;
// gettings some parent nodes
//console.log(frogstable);
let b_node = document.getElementsByTagName("BODY")[0];
let h_node = document.getElementsByTagName("HEAD")[0];
let m_node = document.getElementsByTagName("MAIN")[0];
let track_node = document.getElementById("track");

// get the number of frogs from app.js
//console.log(frogstable);

// ==================== Exercise 1.1 - Set up the track ====================
for (let count = 1; count <= FROGS; count++) {
    // create a lane (<li>), append the lane to the track
    let n = createNewNode("LI", undefined, track_node);

    // give lane an id: lane-count
    n.id = `lane-${count}`;

    // create a <span>, add the lane number to the span, append the span to the lane
    let m = createNewNode("SPAN", count, n);
}

// ==================== Exercise 1.2 - Call in the frogs! ====================
// also challenge 1 
// though said to use while, I stick with

let racers = [];        // empty array
for(let n=0; n<FROGS; n++){
    // generate a random index
    let ind = Math.floor(Math.random() * (frogstable.length));
    let obj = frogstable[ind];
    // check if it's in racers
    if(!racers.includes(obj)){  // includes does a strict comparison
        racers.push(obj);
    }else{
        n--
    }
    //console.log(racers);
}

console.log(racers);    // print to console

// ==================== Exercise 1.3 - Line 'em up! ====================
// ==================== Exercise 1.4 - Add Styling ====================
// ==================== Exercise 1.5 - Track progress ====================

for(let n = 0; n<FROGS; n++){
    // set all progress to 0
    racers[n]["progress"] = 0;
    racers[n]["lane"] = `lane-${n+1}`;
    //get the lan for frog and the frog
    let lane = document.getElementById(`lane-${n+1}`);
    let f = racers[n];
    //create name span node
    createNewNode("SPAN", `${f["name"]}`, lane).classList.add("frog-name");
    // create number node
    let node_frog = createNewNode("TEXT", `${f["number"]}`, lane);
    //node_frog.style.backgroundColor = f["color"];
    node_frog.style.background = "url('./assets/frogx50.png') no-repeat";
    node_frog.classList.add("frog");
    // set progress to 0
}

// ==================== Exercise 1.6 - Make 'em hop! ====================
// ==================== Exercise 1.7 - Hopping in the Browser! ====================
// ==================== Exercise 1.8 - Uncooperative Frogs ====================
// ==================== Exercise 1.9 - And the Winner is...====================
let dec = "======================";
createNewNode("P", dec, m_node);
let progress_txt = createNewNode("P", "", m_node);
createNewNode("P", dec, m_node);

const trackWidth= document.getElementById("track").offsetWidth;;
let hopLength = undefined;
let ranking = [];
let isReached=[];
let t_id = [];
let h_id = [];

racers.forEach(element => {
    // add random interval
    racingFrog(element);
});


function racingFrog(racer){
    // Calculate the hop distance (as a percentage of the `trackWidth`) with the following formula.
    const hop = setInterval(function(){

        let timeout_id = setTimeout(function(){
            hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
            //add hopLength to progress
            racer["progress"] += hopLength;
            
            // check the progress
            if(racer["progress"]>=100){
                clearInterval(hop);
                racer["progress"] = 100;        // reset to 100 if exceed
                if(!ranking.includes(racer)){
                    ranking.push(racer);
                }
                if(!isReached.includes(racer)){
                    isReached.push(racer);
                    console.log(racer["name"] + " has reached the end.");
                }
                if(isOver(racers)){
                    h_id.forEach(element => {
                        clearInterval(element);
                    });
                    t_id.forEach(element => {
                        clearTimeout(element);
                    });
                    console.log(`The first is: ${ranking[0].name}\nThe second is: ${ranking[1].name}\nThe third is: ${ranking[2].name}`);
                    //clearTimeout(timeout_id);
                    anWinner(ranking[0].name);
                }
            }
            updateProgress(racers, "progress");
        }, Math.random()*3*1000);
        t_id.push(timeout_id);
    }, 1000); 
    h_id.push(hop);
}

// helper functions: create specific element and append it to parent
// function to announce winner
function anWinner(win){
    let n = createNewNode("H1", `The winner is ${win}!`, m_node);
    n.style.textAlign = "center";
    n.style.color = "green";
}

// function to check whether all racers reach 100
function isOver(arr){
    let r = true;
    arr.forEach(element => {
        r = r && (element["progress"]===100)
    });
    return r;
}
// function to update all progresses
function updateProgress(arr, property){
    let s = "";
    arr.forEach((ele, ind) => {
        //add hop to the browser
        let frog = document.getElementsByClassName("frog")[ind];
        frog.style.left = ele[property]+"%";
        s = s + "The " + ele.name + "is at progress " + ele[property] +"%\n";
    })
    progress_txt.innerText = s;
    
}
// I wrote these for the last workshop so I just copy-pasted.
function createNewNode(type, text, parent){
    // checking input
    if(typeof(type)!=="string"){
    alert("NOT VALID TYPE!!!");
    }

    // create basic element
    let ele = document.createElement(type);

    // handle inner text
    let t = "";
    if(text!==undefined){
        t_node = document.createTextNode(text);
        ele.appendChild(t_node);
    }

    // handle parent
    if(parent!==undefined){
    parent.appendChild(ele);
    }

    // return the element if needed.
    return ele; 
}

function createImgNode(img_link, alt_text, parent){
    let image = createNewNode("img", undefined, parent)

    // handle src link
    if(img_link!==undefined){
    image.src = img_link;       // the src link
    }
    // handle alt text
    if(alt_text!==undefined){
    image.alt=alt_text;     // the alt property
    }

    // return image node if needed
    return image;  
}

function createAnchorNode(href_input, text, parent){
    let a_node = createNewNode("A", text, parent);

    // handle href
    if(href_input!==undefined){
    a_node.href = href_input;
    }

    // return anchor node if needed
    return a_node;
}

function createStyleNode(href_input, text, parent){
    let style_node = createNewNode("link", text, parent);

    //handle rel
    style_node.rel = "stylesheet";

    // handle href
    if(href_input!==undefined){
    style_node.href = href_input;
    }

    // return node if needed
    return style_node;
}

function createScriptNode(src_input, type, parent){
    let script_node = createNewNode("script", undefined, parent);

    // handle type
    if(type!==undefined){
    script_node.type=type;
    }
    // handle href
    if(src_input!==undefined){
    script_node.href = src_input;
    }

    // return node if needed
    return style_node;
}
