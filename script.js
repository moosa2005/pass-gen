function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLetters = document.getElementById('include-letters').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;
  
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+{}:"<>?|[];,./`~';
  
    let characters = '';
    if (includeLetters) characters += letters;
    if (includeNumbers) characters += numbers;
    if (includeSpecial) characters += specialCharacters;
  
    if (characters === '') {
      document.getElementById('password-output').innerText = 'Please select at least one option.';
      return;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    document.getElementById('password-output').innerText = `Generated Password: ${password}`;
  }
  