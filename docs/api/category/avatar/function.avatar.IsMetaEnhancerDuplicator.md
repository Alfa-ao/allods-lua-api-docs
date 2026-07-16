# avatar.IsMetaEnhancerDuplicator
Определяет, является ли предмет инструментом для копирования метаитема-улучшителя.
## Описание
```lua
avatar.IsMetaEnhancerDuplicator( itemId: ObjectId ): boolean
```
Функция проверяет указанный предмет и возвращает логическое значение, указывающее на то, является ли данный предмет инструментом для копирования метаитема-улучшителя.
## Список параметров
- **`itemId`** (`ObjectId`)
Уникальный идентификатор предмета, который необходимо проверить.
## Возвращаемые значения
Возвращает `boolean` — `true`, если предмет является инструментом для копирования метаитема-улучшителя, и `false` в противном случае.
## Примеры
### Проверка предмета и запуск процесса копирования
```lua
if avatar.IsMetaEnhancerDuplicator( instrumentId ) then
    avatar.DuplicateMetaEnhancerItem( itemId, instrumentId )
end
```
::: info Описание примера
В примере сначала проверяется, является ли предмет с идентификатором `instrumentId` инструментом для копирования. Если проверка успешна, инициируется процесс копирования метаитема-улучшителя с помощью функции `avatar.DuplicateMetaEnhancerItem`.
:::
## Смотрите также
- [avatar.DuplicateMetaEnhancerItem](avatar.DuplicateMetaEnhancerItem)