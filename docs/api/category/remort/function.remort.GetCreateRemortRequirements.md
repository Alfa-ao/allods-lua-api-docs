# remort.GetCreateRemortRequirements

Возвращает информацию о требованиях расы при создании реморта.

## Описание

```lua
remort.GetCreateRemortRequirements(): table|nil
```

Функция возвращает таблицу с информацией о требованиях расы при создании реморта. При отсутствии ошибок возвращается таблица, где ключами являются `string`, а значениями - `RequirementsTable` (список условий для сброса имеющегося реморта). В случае возникновения ошибки функция возвращает `nil`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil`.

При отсутствии ошибок возвращается таблица, где ключами являются `string`, а значениями - `RequirementsTable` (список условий для сброса имеющегося реморта).

## Примеры

### Получение требований для создания реморта

```lua
local requirements = remort.GetCreateRemortRequirements()
if requirements then
    for race, reqTable in pairs(requirements) do
        LogInfo("Обработка требований для расы")
    end
end
```

## Смотрите также

- [RequirementsTable](ссылка_1)