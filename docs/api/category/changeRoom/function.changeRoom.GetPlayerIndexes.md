# changeRoom.GetPlayerIndexes
Возвращает таблицу с индексами вариаций внешнего вида главного игрока из списков, сформированных функцией `changeRoom.GetAvatarTemplate`.

## Описание
```lua
changeRoom.GetPlayerIndexes(): table | nil
```
Функция возвращает таблицу, содержащую индексы вариаций внешнего вида для основного персонажа, а также опционально для второго и третьего персонажей и питомца, если они присутствуют. Возвращаемые индексы соответствуют спискам, полученным через `changeRoom.GetAvatarTemplate`. В случае возникновения ошибки или отсутствия данных функция возвращает `nil`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` или `nil`.

Если данные успешно получены, возвращается таблица со следующими полями:
- **`primary`** (`table` | `VariationsTable`)
Таблица, описывающая вариации основного персонажа.
- **`secondary`** (`table` | `VariationsTable` | `nil`)
Таблица, описывающая вариации второго персонажа, если он есть.
- **`tertiary`** (`table` | `VariationsTable` | `nil`)
Таблица, описывающая вариации третьего персонажа, если он есть.
- **`pet`** (`table` | `VariationsTable` | `nil`)
Таблица, описывающая вариации питомца, если он есть.
- **`petIndex`** (`number` | `integer` | `nil`)
Индекс текущего облика питомца, если он есть.

Структура таблицы `VariationsTable`:
- **`name`** (`WString`)
Имя персонажа.
- **`sexId`** (`number` | `ENUM_SEX_...`)
Пол игрока. Значения соответствуют перечислению `SEX_...` (`SEX_UNKNOWN`, `SEX_MALE`, `SEX_FEMALE`).
- **`variations`** (`table`)
Таблица с индексами вариаций внешнего вида:
  - `skin` (`number` | `integer`) - индекс (с нуля) вариации кожи.
  - `skinColor` (`number` | `integer`) - индекс (с нуля) вариации цвета кожи.
  - `hair` (`number` | `integer`) - индекс (с нуля) вариации волос.
  - `hairColor` (`number` | `integer`) - индекс (с нуля) вариации цвета волос.
  - `face` (`number` | `integer`) - индекс (с нуля) вариации лица.
  - `facial` (`number` | `integer`) - индекс (с нуля) вариации дополнительных признаков.
  - `additional` (`number` | `integer`) - индекс (с нуля) вариации дополнительных параметров.
  - `body` (`number` | `integer`) - индекс (с нуля) вариации телосложения.

## Примеры
### Получение индекса вариации кожи основного персонажа
```lua
local template = changeRoom.GetAvatarTemplate( true )
local indexes = changeRoom.GetPlayerIndexes()
if template and indexes then
  local skin = template.primaryVariationTemplateInfo.skins[ indexes.primary.variations.skin ]
end
```
::: info Описание примера
В примере сначала запрашивается шаблон аватара с помощью `changeRoom.GetAvatarTemplate`, а затем извлекаются индексы вариаций через `changeRoom.GetPlayerIndexes`. При успешном получении обоих наборов данных из таблицы шаблона извлекается информация о вариации кожи основного персонажа, используя индекс из таблицы `indexes.primary.variations.skin`.
:::

## Смотрите также
- [changeRoom.GetAvatarTemplate](changeRoom.GetAvatarTemplate)