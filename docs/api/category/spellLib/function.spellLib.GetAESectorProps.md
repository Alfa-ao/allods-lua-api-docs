# spellLib.GetAESectorProps

Возвращает информацию об AEMark типа AEMarkSector у спелла.

## Описание

```lua
spellLib.GetAESectorProps( id: SpellId ): table | nil
```

Функция извлекает и возвращает информацию об AEMark типа AEMarkSector у спелла.

## Список параметров

- **`id`** (`SpellId`) - Идентификатор умения.

## Возвращаемые значения

Возвращает `table` | `nil`.

Если информация недоступна (отсутствует спелл, нет AEMark в спелле или AEMark спелла имеет другой тип), возвращается `nil`.

Если информация доступна, возвращается таблица со следующими полями:

- **`angle`** (`number`) - Угол раствора сектора в градусах.

- **`centerObj`** (`VisObjectId` | `nil`) - Визобж для центра сектора.

- **`fillerObj`** (`VisObjectId` | `nil`) - Визобж для заполнения сектора.

- **`leftObj`** (`VisObjectId` | `nil`) - Визобж для левого края сектора.

- **`rightObj`** (`VisObjectId` | `nil`) - Визобж для правого края сектора.

## Примеры

### Получение свойств сектора для первого умения

```lua
local spellbook = avatar.GetSpellBook()
common.LogInfo( spellLib.GetAESectorProps( spellbook[1] ) )
```

::: info Описание примера
Извлекается книга заклинаний персонажа, после чего запрашиваются и выводятся в лог свойства AEMark сектора для первого умения из списка.
:::

## Смотрите также

- [avatar.GetSpellBook](/api/category/avatar/function.avatar.GetSpellBook.md)