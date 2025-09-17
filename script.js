let input = document.getElementById('inputbox');
let string = "";

document.querySelectorAll('button').forEach(btn => {
  btn.onclick = e => {
    let val = e.target.innerHTML;
    if (val === '=') {
      try { string = eval(string); } catch { string = "Error"; }
    } else if (val === 'AC') string = "";
    else if (val === 'DEL') string = string.slice(0, -1);
    else if (val === '±') string = string ? (-eval(string)).toString() : "";
    else if (val === '%') string = string ? (eval(string) / 100).toString() : "";
    else string += val;
    input.value = string;
  };
});

document.addEventListener('keydown', e => {
  let k = e.key;
  if (!isNaN(k) || "+-*/.()".includes(k)) string += k;
  else if (k === 'Enter') try { string = eval(string); } catch { string = "Error"; }
  else if (k === 'Backspace') string = string.slice(0, -1);
  else if (k === 'Escape') string = "";
  input.value = string;
});