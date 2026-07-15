# avatar.GetPsionicContacts
Возвращает таблицу установленных псионических контактов главного героя.

## Описание
```lua
avatar.GetPsionicContacts(): table
```
Функция возвращает индексированную по типу контакта таблицу активных псионических контактов. Каждый псионический контакт определенного типа может быть установлен только с одной целью. В возвращаемой таблице по индексу типа контакта располагается информация о контакте или `nil`, если контакт данного типа отсутствует. Если главный герой не является псиоником, возвращается пустая таблица.

::: warning Замечание
У контакта может быть определена длительность. В таком случае в поле `durationMs` указывается длительность контакта в миллисекундах. Если для данного типа контакта длительность не определена (контакт длится неограниченно долго), значение `durationMs` равно `0`.
:::

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` — таблицу, индексированную по типу контакта.
- Ключ (`number`) — тип контакта.
- Значение (`table` | `nil`) — таблица с информацией о контакте, содержащая следующие поля:
  - `unitId` (`ObjectId`) — идентификатор контактного юнита.
  - `durationMs` (`number`) — длительность контакта в миллисекундах.
  - `remainingMs` (`number`) — оставшееся время до окончания контакта в миллисекундах.

## Примеры
### Получение информации о псионических контактах
```lua
local contacts = avatar.GetPsionicContacts()

local contact = contacts[ PSIONIC_CONTACT_NORMAL ]
if contact then
  local normalContacterId = contact.unitId
  if normalContacterId then
    local name = unit.GetName( normalContacterId )
  end
end

contact = contacts[ PSIONIC_CONTACT_CRUDE ]
if contact then
  local crudeContacterId = contact.unitId
  if crudeContacterId then
    local name = unit.GetName( crudeContacterId )
    if contact.durationMs > 0 then
      local remaining = contact.remainingMs / contact.durationMs
    end
  end
end
```
::: info Описание примера
Извлекается таблица всех активных псионических контактов. Проверяется наличие контакта типа `PSIONIC_CONTACT_NORMAL` и `PSIONIC_CONTACT_CRUDE`. Если контакт существует, извлекается идентификатор юнита для получения его имени через `unit.GetName`. Для контакта типа `PSIONIC_CONTACT_CRUDE` дополнительно вычисляется доля оставшегося времени, если длительность контакта больше нуля.
:::

## Смотрите также
- `PSIONIC_CONTACT_NORMAL`
- `PSIONIC_CONTACT_CRUDE`
- `unit.GetName`