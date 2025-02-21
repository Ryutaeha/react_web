package kr.or.iei.board.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.or.iei.board.model.service.BoardSerivce;

@RestController
@RequestMapping(value="/board")
public class BoardController {
	@Autowired
	private BoardSerivce boardSerivce;
	
	@GetMapping(value="/list/{reqPage}")
	public Map list(@PathVariable int reqPage) {
		Map map = boardSerivce.boardList(reqPage);
		return map;
	}
}
