/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
    if (typeof password !== 'string' || !password || !password?.trim()) return 'weak';

    let count = 0;
    if (lengthValidation(password, 8)) count++;
    if (isContainsUppercaseCharacter(password)) count++;
    if (isContainsLowercaseCharacter(password)) count++;
    if (isContainsNumber(password)) count++;
    if (isContainsSpecialCharacter(password)) count++;

    if (count === 5) {
        return 'very strong';
    } else if (count === 4) {
        return 'strong';
    } else if (count >= 2) {
        return 'medium';
    } else {
        return 'weak';
    }
}


const lengthValidation = (str, expLength) => {
    return str.length >= expLength;
}

const isContainsUppercaseCharacter = (str) => {
    for (const ch of str) {
        if (ch >= 'A' && ch <= 'Z') {
            return true;
        }
    }

    return false;
}

const isContainsLowercaseCharacter = (str) => {
    for (const ch of str) {
        if (ch >= 'a' && ch <= 'z') {
           return true;
        }
    }

    return false;
}

const isContainsNumber = (str) => {
    for (const ch of str) {
        if (ch >= '0' && ch <= '9') {
           return true;
        }
    }

    return false;
}

const isContainsSpecialCharacter = (str) => {
    const specialStr = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (const ch of str) {
        if (specialStr.includes(ch)) {
            return true;
        }
    }

    return false;
}