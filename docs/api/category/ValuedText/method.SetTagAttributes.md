# ValuedTextSafe:SetTagAttributes

Изменяет значения атрибутов у тега или тегов в экземпляре `ValuedText`.

## Описание

```lua
ValuedTextSafe:SetTagAttributes( isRTag: boolean, tagName: WString, tagAttributes: table )
```

Метод изменяет значения атрибутов у тега или тегов. Выбор изменяемого тега зависит от параметра `isRTag`. Если `isRTag` равен `true`, тег ищется по имени подстановки (теги `<r>`, `<rs>`). Если `isRTag` равен `false`, тег ищется по имени тега; если `tagName` является пустой строкой, затрагиваются все теги. Поиск тега осуществляется только в текущем `ValuedText`, корректная работа при использовании вложенных текстов не гарантируется.

Таблица `tagAttributes` должна состоять из пар ключ-значение, где ключ - имя редактируемого атрибута (`WString`), а значение - его новое значение (`string`/`WString`) или признак удаления атрибута (`false`). При наличии некорректных пар метод выбрасывает исключение. Если искомый тег не найден, метод не возымеет эффекта. Задание несуществующего атрибута вызывает внутреннюю ошибку `ValuedText`.

Порядок применения стилей в рамках одного тега: сначала применяется внутренний класс, затем внешний класс (с перезаписью значений), затем атрибуты внешнего класса. Атрибуты вложенных тегов имеют приоритет над атрибутами внешних тегов.

::: warning Замечание
Изменение атрибутов тегов напрямую не рекомендуется. По возможности следует использовать стили и подстановку через `SetClassVal` или `SetTextValues`.
:::

::: tip Совет
Пример тега: `<h1 class="highlight" fontsize="15">Test text</h1>`.
:::

Допустимые атрибуты и их значения:

| Атрибут | Допустимые значения | Описание |
|---|---|---|
| `fontname` | `AllodsFantasy`, `AllodsSystem`, `AllodsConsole`, `Content`, `ContentNarrow`, `ContentNarrowBold`, `ContentNarrowItalic`, `ContentNarrowBoldItalic` | Шрифт |
| `fontsize` | `int > 0` | Размер шрифта |
| `alignX` | (0), `left` (1), `center` (2), `right` (3), `justify` (4) | Тип выравнивания по X |
| `alignY` | `top` (0), `middle` (1), `bottom` (2) | Тип выравнивания по Y |
| `color` | `int`, `hexint` | Цвет |
| `shadow` | `int 0-10` | Тень |
| `shadowcolor` | `int`, `hexint` | Цвет тени |
| `outline` | `int 0-2` | Обводка |
| `outlinecolor` | `int`, `hexint` | Цвет обводки |
| `paragraph` | `false` (0), `true` (1) | Начать текст с нового абзаца |
| `lineSpasing` | `float` | Межстрочный интервал |
| `before` | `int >= 0` | Отступ первой строки абзаца |
| `rightToLeft` | `0`, `1` | Написание справа налево (DEPRECATED) |

## Список параметров

- **`isRTag`** (`boolean`) - Выбор типа тега для редактирования.

- **`tagName`** (`WString`) - Имя тега для редактирования.

- **`tagAttributes`** (`table`) - Таблица модифицируемых атрибутов.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Изменение атрибутов тега подстановки

```lua
--- <header><r name="unitName"/></header>
local tag = userMods.ToWString( "unitName" )
local fontsize = userMods.ToWString( "fontsize" )
local color = userMods.ToWString( "color" )
valuedText:SetTagAttributes( true, tag, {
    [ fontsize ] = tostring( 18 ),
    [ color ] = "0xFFEEDDCC"
} )
```

::: info Описание примера
Формируются переменные для имени подстановки и атрибутов, после чего вызывается метод для изменения размера шрифта и цвета тега `<r name="unitName"/>`.
:::

## Смотрите также

- [SetClassVal](method.SetClassVal)
- [SetTextValues](method.SetTextValues)