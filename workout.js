/**
 * Пройти тренировку лесенкой по пользовательским пожеланиям.
 */
function doUserExercises() {
    // TODO: Добавить проверку корректности данных.
    const name = prompt('Введите название упражнения', 'отжимания');
    const from = Number(prompt('Введите стартовое количество повторений', '1'));
    const to = Number(prompt('Введите конечное количество повторений', '10'));
    const step = Number(prompt('Введите шаг увеличения', '1'));

    // TODO: Добавить опции для нестандартной программы (пирамида и т.д.)
    const exercises = getExercises(from, to, step);
    for (let count of exercises) {
        alert(`Сделайте ${name}: ${count} раз (-а)`);
    }

    alert('Лесенка завершена!');
}

/**
 * Получить количество повторений упражнения по указанным данным.
 * @param {Number} from Стартовое количество
 * @param {Number} to Окончательное количество
 * @param {Number} step Шаг увеличения количества
 * @returns
 */
function getExercises(from, to, step) {
    let exercises = [];
    for (let i = from; i <= to; i += step) {
        exercises.push(i);
    }
    return exercises;
}
