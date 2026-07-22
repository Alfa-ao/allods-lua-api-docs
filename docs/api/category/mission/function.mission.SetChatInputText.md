# mission.SetChatInputText

Меняет состояние строки ввода с префиксами/слеш-командами.

## Описание

```lua
mission.SetChatInputText( text: WString, cursorPos: number )
```

Разбор исходной строки на предмет наличия в ней слеш-команд.

## Список параметров
- **`text`** (`WString`) - исходная строка (чаще всего из EditLine).

- **`cursorPos`** (`number`) - позиция курсора.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Установка текста строки ввода

```lua
mission.SetChatInputText( wtEditLine:GetText(), 0 )
```