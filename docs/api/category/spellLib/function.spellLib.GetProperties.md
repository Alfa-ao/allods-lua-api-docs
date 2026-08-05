# spellLib.GetProperties
Возвращает информацию о базовых значениях статических свойств умения по его идентификатору.

## Описание

```lua
spellLib.GetProperties( id: SpellId ): table | nil
```

Функция возвращает таблицу с базовыми значениями статических свойств умения. Если умение с указанным идентификатором не найдено, возвращается `nil`.

## Список параметров

- **`id`** (`SpellId`) - Уникальный идентификатор умения.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с базовыми значениями свойств умения или `nil`, если умение не найдено.

- **`launchWhenReady`** (`boolean`) - `true`, если заклинание посылается в цель сразу после процесса каста; `false`, если заклинание можно подготовить для моментального запуска.

- **`prepareDuration`** (`number`) - Время подготовки (каста) заклинания.

- **`baseManaCostPercentage`** (`number`) - Расход маны в процентах от полной.

- **`range`** (`number`) - Расстояние до цели, на котором действует заклинание.

- **`radius`** (`number`) - Радиус действия AOE заклинания от точки применения. Если заклинание не является AOE, возвращается `0.0`.

- **`minRange`** (`number`) - Минимальная дистанция до цели, на которой возможно применение умения.

- **`targetType`** (`number`(`SPELL_TYPE_*`)) - Тип цели заклинания. Может принимать значения: `SPELL_TYPE_SELF`, `SPELL_TYPE_CURRENT_TARGET`, `SPELL_TYPE_POINT`, `SPELL_TYPE_CURRENT_TARGET_NOT_SELF`.

- **`sysSubElement`** (`string`(`ENUM_SubElement_*`)) - Тип воздействия.

- **`level`** (`number`) - Уровень, начиная с которого можно изучить это умение.

- **`rank`** (`number`) - Ранг умения, начиная с 1.

- **`isHelpful`** (`boolean`) - `true`, если это позитивное заклинание (можно кастовать в друзей).

- **`isHarmful`** (`boolean`) - `true`, если это негативное заклинание (можно кастовать во врагов).

- **`isChanneled`** (`boolean`) - `true`, если это канал-спелл.

- **`isFairySpell`** (`boolean`) - `true`, если заклинание предоставляется покровителем.

- **`uiSpellBookPageType`** (`number`(`SPELLBOOK_PAGE_*`)) - Тип страницы в книге заклинаний.

- **`typeAEMark`** (`number`) - Тип AOE-марки заклинания. Может принимать значения: 0 (`AEMarkNone`), 1 (`AEMarkDecal`), 2 (`AEMarkSector`), 3 (`AEMarkShipAOE`).

- **`sysNameAEMark`** (`string` | `nil`) - Имя AEMarkDecal для визуализации у AOE заклинаний. `nil` для не-AOE заклинаний или заклинаний с типом марки, отличным от `AEMarkDecal`.

- **`debugName`** (`string` | `nil`) - Системная информация для отладочной версии (путь к файлу). Отсутствует в финальной версии клиента.

## Примеры

### Получение информации об умении из книги заклинаний
```lua
local spellbook = avatar.GetSpellBook()
local spellInfo = spellLib.GetProperties( spellbook[1] )
if spellInfo then
    common.LogInfo( "spellBaseMinRange: ", spellInfo.minRange )
end
```

::: info Описание примера
В примере сначала получается список умений из книги заклинаний с помощью функции `avatar.GetSpellBook()`. Затем для первого умения из списка запрашиваются его базовые свойства через `spellLib.GetProperties()`. После проверки на существование умения, в лог выводится значение минимальной дистанции применения.
:::

## Смотрите также

- [avatar.GetSpellBook](/api/category/avatar/function.avatar.GetSpellBook.md)
- [ENUM_SubElement_*](/api/enums/enums.ENUM_SubElement.md)
- [SPELLBOOK_PAGE_*](/api/constants/constants.SPELLBOOK_PAGE.md)