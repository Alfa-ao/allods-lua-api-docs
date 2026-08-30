# CharacterClassId

Идентификатор класса аватара. Один из типов группы `ResourceId`.

Из объекта этого типа можно получить информацию вызовом функции `CharacterClassId:GetInfo()`:


## Возвращаемые значения

- **`table`** - таблица с параметрами класса.

    - **`name`** (`WString`) - локализуемое имя класса (для показа игроку)
    - **`className`** (`string`) - нелокализуемое системное имя класса (для использования в скриптах)
    - **`manaType`** (`number`(`MANA_TYPE_*`)) - тип маны, используемый классом
    - **`sysManaType`** (`string`) - "ENUM_ManaType_..." тип маны, используемый классом
    - **`sharedAbilities`** (`table`) - список способностей `AbilityId`, расшариваемых с перерождениями
    - **`sharedSpells`** (`table`) - список заклинаний `SpellId`, расшариваемых с перерождениями

## Пример

```lua
local classId = avatar.GetClassId()
local manatype = classId:GetInfo().manaType
```

## Смотрите также

- [avatar.GetClassId](/api/category/avatar/function.avatar.GetClass.md)
- [ENUM_ManaType_*](/api/enums/enums.ENUM_ManaType.md)
- [MANA_TYPE_*](/api/constants/constants.MANA.md)

