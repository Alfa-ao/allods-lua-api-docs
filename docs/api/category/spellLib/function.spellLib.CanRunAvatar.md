# spellLib.CanRunAvatar

Проверяет возможность запуска заклинания, игнорируя текущее действие, кулдаун и ограничения цели.

## Описание

```lua
spellLib.CanRunAvatar( id: SpellId, ignoreCasterResources: boolean | nil ): boolean
```

Функция выполняет проверку возможности запуска заклинания, игнорируя текущее действие, кулдаун и ограничения цели.

## Список параметров

- **`id`** (`SpellId`) - Идентификатор умения.

- **`ignoreCasterResources`** (`boolean` | `nil`) - Флаг игнорирования проверки предикатов ресурсов заклинателя (CasterResources). По умолчанию принимает значение `false`.

## Возвращаемые значения

Возвращает `boolean` - `true`, если заклинание можно запустить в принципе, и `false` в противном случае.

## Примеры

### Проверка возможности запуска заклинания из книги умений

```lua
local spellbook = avatar.GetSpellBook()
self:Activate( spellLib.CanRunAvatar( spellbook[1] ) )
```

::: info Описание примера

В примере извлекается книга умений персонажа с помощью функции `avatar.GetSpellBook`. Затем для первого умения из полученного списка проверяется возможность его запуска через `spellLib.CanRunAvatar`, а результат передается в метод `self:Activate` для активации соответствующего элемента.

:::

## Смотрите также

- [avatar.GetSpellBook](../avatar/function.avatar.GetSpellBook)