# remortCreation.GetAvatarTemplate

Возвращает информацию об указанном шаблоне аватара.

## Описание

```lua
remortCreation.GetAvatarTemplate( templateIndexes: table ): table | nil
```

Функция возвращает информацию об указанном шаблоне аватара. Вместе с шаблоном возвращается информация о вариациях персонажей, которую предварительно нужно запросить с сервера посредством вызова `remortCreation.RequestAllVariations()`.

::: warning Замечание
Функция реализована в UI.
:::

## Список параметров

- **`templateIndexes`** (`table`) - Таблица с информацией, задающей шаблон для аватара.

    - `faction` (`number`) - Индекс фракции [0..].

    - `race` (`number`) - Индекс расы [0..].

    - `class` (`number`) - Индекс класса [0..].

    - `sex` (`number`) - Индекс пола [0..].

## Возвращаемые значения

Возвращает `table` | `nil` - если шаблон найден, возвращается таблица со следующими полями:

- **`hasActualVariationInfo`** (`boolean`) - Содержит ли таблица актуальную информацию о вариациях персонажей. Информация может быть неактуальной в случае ошибок данных, либо если она не была запрошена, либо ещё не получена с сервера.

- **`primaryVariationTemplateInfo`** (`table`) - Таблица с количеством вариаций для главного персонажа.

- **`isTrio`** (`boolean`) - Значение `true`, если персонаж представляет собой троицу (например, гибберлинги). Для троицы возвращаются дополнительные поля `maleVariationTemplateInfo` и `femaleVariationTemplateInfo`.

- **`maleVariationTemplateInfo`** (`table`) - Таблица с количеством вариаций для дополнительных персонажей мужского пола. Присутствует только если `isTrio == true`.

- **`femaleVariationTemplateInfo`** (`table`) - Таблица с количеством вариаций для дополнительных персонажей женского пола. Присутствует только если `isTrio == true`.

- **`pets`** (`table` | `nil`) - При наличии настраиваемого питомца возвращается таблица с таблицами описаний обликов питомцев, каждая из которых содержит количество вариаций. Для питомца реально используется только поле `face`. Если питомец отсутствует, значение равно `nil`.

Поля для таблиц с количеством вариаций (`primaryVariationTemplateInfo`, `maleVariationTemplateInfo`, `femaleVariationTemplateInfo`, элементы `pets`):

- `skins` (`table`) - Доступные вариации тела.

- `skinColors` (`table`) - Доступные вариации цвета тела.

- `hairs` (`table`) - Доступные прически.

- `hairColors` (`table` | `nil`) - Доступные цвета волос, если есть.

- `faces` (`table`) - Доступные варианты лица.

- `facials` (`table`) - Доступные типы особенностей (лица или украшений).

- `additionals` (`table`) - Доступные варианты татуировок.

- `morphPresets` (`table`) - Доступные варианты пропорций персонажа.

Каждое из перечисленных полей содержит таблицу названий: индексированную [0..] таблицу пар `number`, `boolean`, где ключ - индекс, а значение - `true`.

## Примеры

### Получение информации о шаблоне аватара

```lua
local avatarTemplate = remortCreation.GetAvatarTemplate( templateIndexes )
if avatarTemplate then
    LogInfo( "primary skin count: ", avatarTemplate.primaryVariationCount.skinTexture )
    if avatarTemplate.petVariationCount then
        LogInfo( "pet variation count: ", avatarTemplate.petVariationCount.face )
    end
end
```

## Смотрите также

- [remortCreation.RequestAllVariations](/api/category/remortCreation/function.remortCreation.RequestAllVariations.md)