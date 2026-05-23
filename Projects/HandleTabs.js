const tabs = document.getElementById("editorTabs");
console.log(tabs ?? "no tabs");
const buttons = tabs.querySelectorAll(".tab-btn");
console.log("buttons count: " + buttons.length);
const panels  = tabs.querySelectorAll(".tab-panel");
console.log("panels count: " + panels.length);

function EnableTab(tabButton, i)
{
    buttons.forEach(
        button => 
        {
            button.classList.remove("active");
            button.setAttribute("active", "false");
        }
    );
    panels.forEach(panel => panel.hidden = true);

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    panels[i].hidden = false;
}

function EnableTabSwitching()
{
    buttons.forEach(
        (button, i) =>
            button.addEventListener("click", () => EnableTab(button, i))
    );
}

// document.querySelectorAll('.editor-tabs').forEach(
//     tabs => {
//         console.log("picked up tab");
//         const buttons = tabs.querySelectorAll('.tab-btn');
//         const panels = tabs.querySelectorAll('.tab-panel');

//         buttons.forEach(
//             (btn, i) => {
//                 console.log("added func to button: " + i);
//                 btn.addEventListener(
//                     'click',
//                     () => {
//                         buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
//                         panels.forEach(p  => { p.hidden = true; });

//                         btn.classList.add('active');
//                         btn.setAttribute('aria-selected', 'true');
//                         panels[i].hidden = false;
//                     }
//                 );
//             }
//         );
//     }
// );
EnableTabSwitching();
console.log("Ran logic");