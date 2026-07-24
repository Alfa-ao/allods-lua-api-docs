# TextViewSafe:PlayTextScaleEffect
Запускает эффект масштабирования текста в TextView.

## Описание
```lua
TextViewSafe:PlayTextScaleEffect( start: number | nil, finish: number | nil, timeMs: number, algoDesc: number, needEvent: boolean, eventReceivers: table | nil )
```
Поддерживается только строго центрированный текст (выравнивание: alignx="center", aligny="middle").

Имеет тип ET_TEXT_SCALE, соответствует шаблону PlayEffect( self, start, finish, timeMs, algoDesc, needEvent, eventReceivers ).

Типы параметров start и finish: number (float) [> 0].

::: warning Замечание
Не рекомендуется оставлять масштабный коэффициент отличным от 1 на длительное время: текст может быть размытым.
:::

## Список параметров
- **`start`** (`number` | `nil`)
Начальный коэффициент масштабирования текста.

- **`finish`** (`number` | `nil`)
Конечный коэффициент масштабирования текста.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Запуск эффекта масштабирования
```lua
wtTextView:PlayTextScaleEffect( 0.5, 2.0, 1000, EA_SYMMETRIC_FLASH )
```