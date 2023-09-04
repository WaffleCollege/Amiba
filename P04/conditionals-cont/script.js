'use strict'
// Please don't delete the 'use strict' line above

let expected;
let actual;

//問題1
/**
 * @param {number} ??? - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13歳から 19歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */

function isTeenager(age) {
    return 13 <= age && age <= 19;
  }
  

  console.log("問題1の解答")
  actual = isTeenager(3);
  expected = false;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = isTeenager(14);
  expected = true;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // さらにテストを書いて、コードが正しいことを確認してください。
  

  //問題2
  function isTeenager(age) {
    if(typeof(age) == "number"){
        return 13 <= age && age <= 19;
    } else {
        return "Invalid! Age is not a number!";
    }
  }

  console.log("問題2の解答")
actual = isTeenager("Hello!");
expected = "Invalid! Age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(true);
expected = "Invalid! Age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager();
expected = "Invalid! Age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//問題3
/**
 * @param {string} ??? - 人の名前
 * @param {boolean} ??? - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章
 */

function anotherGreeting(name, dec, greee) {
    if(dec == true) {
        if(greee == true) {
            return "Hello, " + name + "-san.";
        } else {
            return "Goodbye, " + name + "-san."
        }
    } else {
        if(greee == true) {
            return "Hello, " + name + "!";
        } else {
            return "Goodbye, " + name + "!"
        }
    }
}

console.log("問題3の解答")
actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。


//問題4
function anotherGreeting(name, dec, greee) {
    if(typeof(name) == "string" && typeof(dec) == "boolean" && typeof(greee) == "boolean" ) {
        if(dec == true) {
            if(greee == true) {
                return "Hello, " + name + "-san.";
            } else {
                return "Goodbye, " + name + "-san."
            }
        } else {
            if(greee == true) {
                return "Hello, " + name + "!";
            } else {
                return "Goodbye, " + name + "!"
            }
        }
    } else {
        return "無効なインプットです！";
    }
    
}

console.log("問題4の解答")
actual = anotherGreeting(true, false, true);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Sam", true, 0);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


//問題5
/**
 * @param {number} ??? - 0 以上 100 以下の点数
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
 */

function getLetterGrade(score) {
    if( 90 <= score &&  score <= 100) {
        return "A";
    } else if ( 80 <= score &&  score <= 89) {
        return "B";
    } else if ( 70 <= score &&  score <= 79) {
        return "C";
    } else if ( 60 <= score &&  score <= 69) {
        return "D";
    } else {
        return "F";
    }
}

console.log("問題5の解答")
actual = getLetterGrade(95);
expected = "A";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください


//問題6
function getLetterGrade(score) {
    if(0 <= score &&  score <= 100) {
        if( 90 <= score &&  score <= 100) {
            return "A";
        } else if ( 80 <= score &&  score <= 89) {
            return "B";
        } else if ( 70 <= score &&  score <= 79) {
            return "C";
        } else if ( 60 <= score &&  score <= 69) {
            return "D";
        } else {
            return "F";
        }
    } else {
        return "無効な点数です。";
    }
}

console.log("問題6の解答")
actual = getLetterGrade(101);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください


//問題7
/**
 * @param {"A"|"B"|"C"|"D"|"F"} ??? - 成績
 * @returns {number} 各成績における最高点
 */

function getBestNumericalGrade(evol) {
    if(evol == "A") {
        return 100;
    } else if ( evol == "B") {
        return 89;
    } else if ( evol == "C") {
        return 79;
    } else if ( evol == "D") {
        return 69;
    } else {
        return 59;
    }
}

console.log("問題7の解答");
actual = getBestNumericalGrade("A");
expected = 100;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("B");
expected = 89;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください


//問題8
function getBestNumericalGrade(evol) {
    if(evol == "A" || evol == "B" || evol == "C" || evol == "D" || evol == "E") {
        if(evol == "A") {
            return 100;
        } else if ( evol == "B") {
            return 89;
        } else if ( evol == "C") {
            return 79;
        } else if ( evol == "D") {
            return 69;
        } else {
            return 59;
        }
    } else {
        return "無効な点数です。";
    }
}

console.log("問題8の解答");
actual = getBestNumericalGrade("恐竜ってすばらしい");
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade(100);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください