# TextViewSafe:PlayTextScaleEffectSequence

Запускает цепочку эффектов масштабирования текста в TextView.

## Описание

```lua
TextViewSafe:PlayTextScaleEffectSequence( sequenceParams )
```

Запуск цепочки эффектов масштабирования текста. Не рекомендуется оставлять масштабный коэффициент отличным от 1 на длительное время во избежание размытия текста. Поддерживается только строго центрированный текст (выравнивание: `alignx="center"`, `aligny="middle"`). Эффект имеет тип `ET_TEXT_SCALE` и соответствует шаблону `PlayEffectSequence`.

## Список параметров

- **`sequenceParams`** (`table`) - Таблица параметров эффекта масштабирования.

    - **`start`** (`number` | `nil`) - Начальный коэффициент масштабирования текста. Значение должно быть строго больше 0.

    - **`finish`** (`number` | `nil`) - Конечный коэффициент масштабирования текста. Значение должно быть строго больше 0.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый вызов

```lua
local effectDesc = {
    start = 1.0,
    finish = 1.5
}
wtTextView:PlayTextScaleEffectSequence( effectDesc )
```

## Смотрите также

- [PlayEffectSequence](sdfgsdfg)
- [ET_TEXT_SCALE](sdfgsdg)