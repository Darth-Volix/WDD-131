import { participantTemplate, successTemplate } from './templates.js';

let participantCount = 1;

document.getElementById('add').addEventListener('click', function() {
    participantCount++;
    const newParticipantHTML = participantTemplate(participantCount);
    document.getElementById('add').insertAdjacentHTML('beforebegin', newParticipantHTML);
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, el) => total + Number(el.value || 0), 0);
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const total = totalFees();
    const name = document.getElementById('adult_name').value;
    const info = {
      name: name,
      count: participantCount,
      fees: total
    };
  
    document.getElementById('registrationForm').style.display = 'none';
    const summary = document.getElementById('summary');
    summary.innerHTML = successTemplate(info);
    summary.style.display = 'block';
});