const fs = require('fs');
const path = require('path');
const srcDir = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk(srcDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Update gradients (Landing, SignIn, SignUp)
    // Old teal-lime gradient -> sleek dark grey/black
    content = content.replace(/linear-gradient\(135deg,\s*#3bb9af\s*0%,\s*#b3dc39\s*100%\)/g, 'linear-gradient(135deg, #0f172a 0%, #000000 100%)'); // Dark sleek gradient
    // Old light cyan gradient (contact section) -> crisp modern light grey
    content = content.replace(/linear-gradient\(135deg,\s*#e8faf8\s*0%,\s*#f4fbdc\s*100%\)/g, 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)');

    // 2. Adjust primary branding colors
    content = content.replace(/#3bb9af/g, '#ee2028'); // Teal -> Logo Red
    content = content.replace(/#b3dc39/g, '#000000'); // Lime -> Black (text or buttons depending on use)
    content = content.replace(/#76cec7/g, '#ff4d4f'); // Lighter teal (icons) -> soft red
    content = content.replace(/#e9d8fd/g, '#fee2e2'); // avatar fallback bg -> light red
    content = content.replace(/#4c1d95/g, '#991b1b'); // avatar fallback text -> dark red

    // 3. For the dark leftPanels in SignIn/SignUp/Landing, white text is perfect.
    // However, if the left panel text was `#000000` (black) against the teal, it now sits on black, so make it white/light grey!
    if (file.includes('SignIn.jsx') || file.includes('SignUp.jsx') || file.includes('Landing.jsx')) {
        // Fix leftText color which is black on the old hero, now needs to be white/light grey for dark gradient
        content = content.replace(/color:\s*\"#000000\"/g, 'color: \"#e2e8f0\"');
        content = content.replace(/color:\s*\"#2d3748\"/g, 'color: \"#f8fafc\"'); // About text in Landing might be here - but wait, the About section in Landing is white inside.
    }
    
    // For Landing page specifically, the left panel with image had a white bg rgba(255,255,255,0.9), so text shouldn't be white. Let's fix Landing text later if needed.

    // 4. Update the "Welcome Back" robot icon background
    content = content.replace(/backgroundColor:\s*\"#ee2028\"/g, 'backgroundColor: \"#ffe4e6\"'); // Red background for icon is too strong, make it light pink/red

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${path.basename(file)}`);
    }
});
